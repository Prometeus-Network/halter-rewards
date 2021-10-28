import { Module } from '@nestjs/common';
import { StakingService } from './staking.service';
import { StakingResolver } from './staking.resolver';
import { SwapsModule } from '../swaps/swaps.module';
import { PenaltyModule } from '../penalty/penalty.module';
import {
  StakingReward,
  StakingRewardSchema,
} from './schemas/staking-reward.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { StakingRewardsService } from './staking-rewards/staking-rewards.service';

@Module({
  imports: [
    SwapsModule,
    PenaltyModule,
    MongooseModule.forFeature([
      {
        name: StakingReward.name,
        schema: StakingRewardSchema,
      },
    ]),
  ],
  providers: [StakingService, StakingResolver, StakingRewardsService],
  exports: [StakingService],
})
export class StakingModule {}
