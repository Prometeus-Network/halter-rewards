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
import { TradingController } from './trading.controller';
import { ConfigModule } from '@nestjs/config';
import { WalletModule } from '../wallet/wallet.module';

@Module({
  providers: [TradingService, TradingRewardsService, Logger, TradingResolver],
  imports: [
    SwapsModule,
    ConfigModule,
    WalletModule,
    MongooseModule.forFeature([
      {
        name: TradingReward.name,
        schema: TradingRewardSchema,
      },
    ]),
  ],
  controllers: [TradingController],
  exports: [TradingService],
})
export class TradingModule {}
