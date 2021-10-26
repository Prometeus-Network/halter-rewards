import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import BigNumber from 'bignumber.js';
import dayjs, { Dayjs } from 'dayjs';
import { Model } from 'mongoose';
import { config, network } from '../config';
import { PenaltyService } from '../penalty/penalty.service';
import { SwapsService } from '../swaps/swaps.service';
import { StackingReward } from './schemas/staking-reward.schema';

const USDC_DECIMALS = {
  testnet: 10e18,
};

@Injectable()
export class StakingService {
  private logger: Logger = new Logger(StakingService.name);

  constructor(
    private swapsService: SwapsService,
    private penaltyService: PenaltyService,
    @InjectModel(StackingReward.name)
    private stackingReward: Model<StackingReward>,
  ) {}

  async calculate() {
    const startTimestamp = dayjs(parseInt(config.startTimestamp, 10));

    const maxPhases = Math.ceil(
      Math.abs(startTimestamp.diff(dayjs(), config.duration.metric, true)) /
        config.duration.value,
    );
    for (let i = 0; i < maxPhases; i++) {
      this.logger.log(`Processing phase ${i + 1}`);
      const startTime = startTimestamp.add(
        i * config.duration.value,
        config.duration.metric,
      );

      const endTime = startTimestamp.add(
        (i + 1) * config.duration.value,
        config.duration.metric,
      );

      const totalFee = await this.processSwaps(startTime, endTime, i);
      const totalPenalties = await this.processPenalties(startTime, endTime, i);
      // TODO: update with real data
      const totalStakedPerWeek = new BigNumber(1000);

      this.createStackingReward(
        totalFee.div(totalStakedPerWeek),
        totalPenalties.div(totalStakedPerWeek),
        i,
      );
    }
  }

  async createStackingReward(
    fee: BigNumber,
    penalty: BigNumber,
    phase: number,
  ) {
    const reward = {
      phase,
      totalFee: fee.toString(),
      totalPenalties: penalty.toString(),
    };

    const stackingReward = await this.stackingReward.findOne({
      phase: phase,
    });

    if (stackingReward) {
      return await stackingReward.updateOne(reward);
    }

    return await this.stackingReward.create(reward);
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
