import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { WalletModule } from '../wallet/wallet.module';
import { LiquidityService } from './liquidity.service';
import {
  LiquidityReward,
  LiquidityRewardSchema,
} from './schemas/liquidity-reward.schema';
import { LiquidityResolver } from './liquidity.resolver';

@Module({
  imports: [
    WalletModule,
    MongooseModule.forFeature([
      {
        name: LiquidityReward.name,
        schema: LiquidityRewardSchema,
      },
    ]),
  ],
  providers: [LiquidityService, LiquidityResolver],
  exports: [LiquidityService],
})
export class LiquidityModule {}
