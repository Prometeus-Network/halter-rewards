import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { TradingRewardsService } from './trading-rewards.service';

@Controller('trading')
export class TradingController {
  constructor(private tradingRewardsService: TradingRewardsService) {}

  @UseGuards(JwtAuthGuard)
  @Post('payout')
  async payOut(@Body() body: any) {
    await this.tradingRewardsService.payOut(parseInt(body.phase, 10));

    return {
      status: 'ok',
    };
  }
}
