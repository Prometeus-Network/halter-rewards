import { Injectable, Logger, NotAcceptableException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import { TradingReward } from './schemas/trading-reward.schema';
import { ethers } from 'ethers';
import { ConfigService } from '@nestjs/config';
import TradingRewardsAbi from './contracts/rewards.json';
import BigNumber from 'bignumber.js';
import { AppConfig } from '../config/types';
import { WalletService } from '../wallet/wallet.service';
import dayjs from 'dayjs';
import { config } from '../config';

@Injectable()
export class TradingRewardsService {
  private logger = new Logger(TradingRewardsService.name);

  constructor(
    private readonly configService: ConfigService,
    private readonly walletService: WalletService,
    @InjectModel(TradingReward.name)
    private readonly tradingRewards: Model<TradingReward>,
  ) {}

  async findAll(query: FilterQuery<TradingReward>) {
    return this.tradingRewards.find(query);
  }

  async isPaseExists(phase: number) {
    return (
      (await this.tradingRewards.find({ phase }).limit(1)).pop() !== undefined
    );
  }

  async createOrUpdate(reward: TradingReward) {
    const tradingReward = await this.tradingRewards.findOne({
      address: reward.address,
      phase: reward.phase,
    });

    if (tradingReward) {
      return await tradingReward.updateOne(reward);
    }

    return await this.tradingRewards.create(reward);
  }

  async reset() {
    return await this.tradingRewards.deleteMany({});
  }

  async payOut(phase: number) {
    const phaseConfig = config.phases.trading;

    const endTime = dayjs.unix(
      phaseConfig.start + phaseConfig.duration + phase * phaseConfig.duration,
    );

    if (dayjs().diff(endTime) < 0) {
      this.logger.log('Phase is not yet over...');
      throw new NotAcceptableException('Phase is not yet over');
    }

    await this.tradingRewards.updateMany({ phase }, { paidOut: true });

    this.setRewardsInContract(phase);
  }

  async setRewardsInContract(phase: number) {
    const contracts: AppConfig['contracts'] =
      this.configService.get('contracts');
    const phases: AppConfig['phases'] = this.configService.get('phases');

    const contract = new ethers.Contract(
      contracts.tradingRewards,
      TradingRewardsAbi,
      this.walletService.wallet,
    );

    const rewardsPerPhase = phases.trading.rewards[phase];

    this.logger.log(`Phase ${phase}: ${rewardsPerPhase} HALT`);

    const rewards = await this.tradingRewards.find({
      phase,
      paidOut: true,
    });

    for (const reward of rewards) {
      try {
        const value = await contract.vestings(reward.address, reward.phase);

        if (
          !value ||
          !value.paymentAddress ||
          value.paymentAddress.toLowerCase() !== reward.address.toLowerCase()
        ) {
          throw new Error('No vesting found');
        }
        this.logger.log(
          `Vesting found for ${reward.address}, phase ${reward.phase}`,
        );
      } catch (error) {
        this.logger.error(error);

        const period = 2 * 30 * 24 * 60 * 60;

        const amountPerSecond = new BigNumber(rewardsPerPhase)
          .multipliedBy(10e18)
          .multipliedBy(reward.percentage)
          .dividedBy(period);

        await contract.addVesting(
          amountPerSecond.integerValue(BigNumber.ROUND_FLOOR).toString(),
          reward.address,
          reward.phase.toString(),
          period,
        );

        this.logger.log(`Vesting added ${reward.address}`);
      }
    }
  }
}
