import { Controller, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { LiquidityService } from '../liquidity/liquidity.service';
import { StakingService } from '../staking/staking.service';
import { TradingService } from '../trading/trading.service';

@Controller('app')
export class AppController {
  constructor(
    private readonly tradingService: TradingService,
    private readonly stakingService: StakingService,
    private readonly liquidityService: LiquidityService,
  ) {}

  @Post('reset')
  @UseGuards(JwtAuthGuard)
  async reset() {
    this.liquidityService.calculate(true);
    this.stakingService.calculate(true);
    this.tradingService.calculate(true);
  }
}
