import { Module } from '@nestjs/common';
import { StakingService } from './staking.service';
import { StakingResolver } from './staking.resolver';
import { SwapsModule } from '../swaps/swaps.module';
import { PenaltyModule } from '../penalty/penalty.module';
import {
  StackingReward,
  StackingRewardSchema,
} from './schemas/staking-reward.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    SwapsModule,
    PenaltyModule,
    MongooseModule.forFeature([
      {
        name: StackingReward.name,
        schema: StackingRewardSchema,
      },
    ]),
  ],
  providers: [StakingService, StakingResolver],
  exports: [StakingService],
})
export class StakingModule {}
