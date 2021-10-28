import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import { TradingReward } from './schemas/trading-reward.schema';

@Injectable()
export class TradingRewardsService {
  constructor(
    @InjectModel(TradingReward.name)
    private tradingRewards: Model<TradingReward>,
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
}
