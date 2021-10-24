import { Logger, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SwapsModule } from '../swaps/swaps.module';
import {
  TradingReward,
  TradingRewardSchema,
} from './schemas/trading-reward.schema';
import { TradingService } from './trading.service';
import { TradingResolver } from './trading.resolver';
import { TradingRewardsService } from './trading-rewards.service';

@Module({
  providers: [TradingService, TradingRewardsService, Logger, TradingResolver],
  imports: [
    SwapsModule,
    MongooseModule.forFeature([
      {
        name: TradingReward.name,
        schema: TradingRewardSchema,
      },
    ]),
  ],
  exports: [TradingService],
})
export class TradingModule {}
