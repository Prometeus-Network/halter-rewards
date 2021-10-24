import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import { TradingReward } from './schemas/trading-reward.schema';

@Injectable()
export class TradingRewardsService {
  private logger = new Logger(TradingRewardsService.name);

  constructor(
    @InjectModel(TradingReward.name)
    private tradingRewards: Model<TradingReward>,
  ) {}

  async findAll(query: FilterQuery<TradingReward>) {
    return this.tradingRewards.find(query);
  }

  async createOrUpdate(reward: TradingReward) {
    const tradingReward = await this.tradingRewards.findOne({
      address: reward.address,
      phase: reward.phase,
    });

    if (tradingReward) {
      this.logger.log('trading reward exists');
      this.logger.log(tradingReward);

      await tradingReward.updateOne(reward);
      return;
    }

    return await this.tradingRewards.create(reward);
  }
}
