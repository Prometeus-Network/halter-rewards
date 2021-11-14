import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import BigNumber from 'bignumber.js';
import dayjs from 'dayjs';
import { ethers } from 'ethers';
import { FilterQuery, Model, UpdateQuery } from 'mongoose';
import { config } from '../config';
import { WalletService } from '../wallet/wallet.service';
import LiquidityRewardsAbi from './contracts/abi.json';
import { LiquidityReward } from './schemas/liquidity-reward.schema';

@Injectable()
export class LiquidityService {
  private logger = new Logger(LiquidityService.name);

  constructor(
    private walletService: WalletService,
    @InjectModel(LiquidityReward.name)
    private readonly liquidityReward: Model<LiquidityReward>,
  ) {}

  async calculate() {
    const phaseConfig = config.phases.liquidity;
    const startTimestamp = dayjs.unix(phaseConfig.start);

    const maxPhases = Math.ceil(
      Math.abs(
        startTimestamp.diff(dayjs(), 'seconds', true) / phaseConfig.duration,
      ),
    );

    for (let i = 0; i < maxPhases; i++) {
      this.logger.log(`Processing phase ${i}`);

      for (const contractAddress of config.contracts.liquidityRewards) {
        const contract = new ethers.Contract(
          contractAddress,
          LiquidityRewardsAbi,
          this.walletService.provider,
        );

        const { highestStakedPoint } = await contract.weekInfo(i);

        const rewardRate = new BigNumber(
          phaseConfig.rewards[contractAddress][i],
        ).div(highestStakedPoint);

        await this.createOrUpdate({
          phase: i,
          contractAddress,
          rewardRate: rewardRate.toString(),
        });
      }
    }
    this.logger.log('Calculated rewards');
  }

  async createOrUpdate(liquidityRewardDto: UpdateQuery<LiquidityReward>) {
    const liquidityReward = await this.liquidityReward.findOne({
      phase: liquidityRewardDto.phase,
      contractAddress: liquidityRewardDto.contractAddress,
    });

    if (liquidityReward) {
      return liquidityReward.updateOne(liquidityRewardDto);
    }

    return this.liquidityReward.create(liquidityRewardDto);
  }

  async payOut() {
    const stakingRewards = await this.liquidityReward.find();

    for (const { contractAddress, rewardRate, phase } of stakingRewards) {
      const phaseConfig = config.phases.liquidity;

      const endTime = dayjs.unix(
        phaseConfig.start + phaseConfig.duration + phase * phaseConfig.duration,
      );

      if (dayjs().diff(endTime) < 0) {
        this.logger.log('Phase is not yet over...');
        continue;
      }

      const contract = new ethers.Contract(
        contractAddress,
        LiquidityRewardsAbi,
        this.walletService.wallet,
      );

      const period = 2 * 30 * 24 * 60 * 60;

      contract.setWeekState(
        phase,
        new BigNumber(rewardRate)
          .div(period)
          .integerValue(BigNumber.ROUND_FLOOR),
      );
    }
  }

  async findAll(query: FilterQuery<LiquidityReward>) {
    return this.liquidityReward.find(query);
  }
}
