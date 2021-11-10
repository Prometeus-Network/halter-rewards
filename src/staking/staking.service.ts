import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import BigNumber from 'bignumber.js';
import dayjs, { Dayjs } from 'dayjs';
import { config, network } from '../config';
import { PenaltyService } from '../penalty/penalty.service';
import { SwapsService } from '../swaps/swaps.service';
import { WalletService } from '../wallet/wallet.service';
import { StakingRewardsService } from './staking-rewards/staking-rewards.service';
import LockedStackingAbi from './contract/locked.json';
import UnlockedStackingAbi from './contract/locked.json';
import { ethers } from 'ethers';
import { AppConfig } from '../config/types';

const USDC_DECIMALS = {
  testnet: 10e18,
  mainnet: 10e6,
};

@Injectable()
export class StakingService {
  private logger: Logger = new Logger(StakingService.name);

  constructor(
    private readonly configService: ConfigService,
    private readonly walletService: WalletService,
    private readonly swapsService: SwapsService,
    private readonly penaltyService: PenaltyService,
    private readonly stakingRewardService: StakingRewardsService,
  ) {}

  async calculate() {
    const phaseConfig = config.phases.trading;
    const startTimestamp = dayjs.unix(phaseConfig.start);

    const maxPhases = Math.ceil(
      Math.abs(
        startTimestamp.diff(dayjs(), 'seconds', true) / phaseConfig.duration,
      ),
    );

    for (let i = 0; i < maxPhases; i++) {
      this.logger.log(`Processing phase ${i}`);

      const startTime = dayjs.unix(
        phaseConfig.start + i * phaseConfig.duration,
      );

      const endTime = dayjs.unix(
        phaseConfig.start + phaseConfig.duration + i * phaseConfig.duration,
      );

      if (dayjs().diff(endTime) > 0) {
        this.logger.log('Phase is over...');
        const isPhaseExists = await this.stakingRewardService.isPhaseExists(i);

        if (isPhaseExists) {
          continue;
        }
      }

      this.logger.log(startTime.format());
      this.logger.log(endTime.format());

      const totalFee = await this.processSwaps(startTime, endTime, i);
      const totalPenalties = await this.processPenalties(startTime, endTime, i);

      const contracts: AppConfig['contracts'] =
        this.configService.get('contracts');

      const lockedContract = new ethers.Contract(
        contracts.lockedStaking,
        LockedStackingAbi,
        this.walletService.provider,
      );

      const unlockedContract = new ethers.Contract(
        contracts.unlockedStaking,
        UnlockedStackingAbi,
        this.walletService.provider,
      );

      // TODO: add second highestStakedPoint  from LOCKED contract
      const { highestStakedPoint: lockedHighestStakedPoint } =
        await lockedContract.weekInfo(i);

      const { highestStakedPoint: unlockedHighestStakedPoint } =
        await unlockedContract.weekInfo(i);

      // TODO: divide per seconds in  week
      this.stakingRewardService.createOrUpdate({
        phase: i,
        totalFee: totalFee.toString(),
        totalPenalties: totalPenalties.toString(),
        feeRPS: totalFee
          .div(lockedHighestStakedPoint.add(unlockedHighestStakedPoint))
          .toString(),
        penaltyRPS: totalPenalties.div(lockedHighestStakedPoint).toString(),
      });
    }

    this.logger.log('Calculated user rewards');
  }

  async processPenalties(start: Dayjs, end: Dayjs, phase: number) {
    const allPenalties = this.penaltyService.getAllPenalties({
      filter: {
        timestamp_gte: start.unix(),
        timestamp_lt: end.unix(),
      },
    });

    let { value: penalties } = await allPenalties.next();
    let totalPenalties = new BigNumber(0);

    while (penalties) {
      penalties.forEach((penalty) => {
        totalPenalties = totalPenalties.plus(
          new BigNumber(penalty.amount).div(USDC_DECIMALS[network]),
        );
      });

      penalties = (await allPenalties.next()).value;
    }

    this.logger.log(
      `Total penalties for phase ${phase}: ${totalPenalties.toString()}`,
    );

    return totalPenalties;
  }

  async processSwaps(start: Dayjs, end: Dayjs, phase: number) {
    const allSwaps = this.swapsService.getAllSwaps({
      filter: {
        timestamp_gte: start.unix(),
        timestamp_lt: end.unix(),
      },
    });

    let { value: swaps } = await allSwaps.next();
    let totalFee = new BigNumber(0);

    while (swaps) {
      swaps.forEach((swap) => {
        totalFee = totalFee.plus(new BigNumber(swap.fee));
      });

      swaps = (await allSwaps.next()).value;
    }

    this.logger.log(`Total fee for phase ${phase}: ${totalFee.toString()}`);

    return totalFee;
  }
}
