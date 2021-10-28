import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import { StakingReward } from '../schemas/staking-reward.schema';

@Injectable()
export class StakingRewardsService {
  constructor(
    @InjectModel(StakingReward.name)
    private stackingReward: Model<StakingReward>,
  ) {}

  async findAll(query: FilterQuery<StakingReward>) {
    return this.stackingReward.find(query);
  }

  async createOrUpdate(reward: Partial<StakingReward>) {
    const stackingReward = await this.stackingReward.findOne({
      phase: reward.phase,
    });

    if (stackingReward) {
      return await stackingReward.updateOne(reward);
    }

    return await this.stackingReward.create(reward);
  }
}
