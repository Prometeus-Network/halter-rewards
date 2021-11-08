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
import { WalletModule } from '../wallet/wallet.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    SwapsModule,
    WalletModule,
    ConfigModule,
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
