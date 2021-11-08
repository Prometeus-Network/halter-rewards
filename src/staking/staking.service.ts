import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import BigNumber from 'bignumber.js';
import dayjs, { Dayjs } from 'dayjs';
import { config, network } from '../config';
import { PenaltyService } from '../penalty/penalty.service';
import { SwapsService } from '../swaps/swaps.service';
import { WalletService } from '../wallet/wallet.service';
import { StakingRewardsService } from './staking-rewards/staking-rewards.service';
import StakingRewardsAbi from './contract/abi.json';
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
    for (const phase of config.phases.staking) {
      this.logger.log(`Processing phase ${phase.week + 1}`);
      const startTime = dayjs.unix(phase.start);
      const endTime = dayjs.unix(phase.end);

      if (dayjs().diff(endTime) > 0) {
        this.logger.log('Phase is over...');
        const isPhaseExists = await this.stakingRewardService.isPhaseExists(
          phase.week,
        );

        if (isPhaseExists) {
          continue;
        }
      }

      this.logger.log(startTime.format());
      this.logger.log(endTime.format());

      const totalFee = await this.processSwaps(startTime, endTime, phase.week);
      const totalPenalties = await this.processPenalties(
        startTime,
        endTime,
        phase.week,
      );

      const contracts: AppConfig['contracts'] =
        this.configService.get('contracts');

      const contract = new ethers.Contract(
        contracts.staking,
        StakingRewardsAbi,
        this.walletService.provider,
      );

      const totalStakedPerWeek = (await contract.weekInfo(phase.week))
        .highestStakedPoint;

      this.stakingRewardService.createOrUpdate({
        phase: phase.week,
        totalFee: totalFee.toString(),
        totalPenalties: totalPenalties.toString(),
        feeRPS: totalFee.div(totalStakedPerWeek).toString(),
        penaltyRPS: totalPenalties.div(totalStakedPerWeek).toString(),
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
