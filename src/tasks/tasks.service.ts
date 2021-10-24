import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { TradingService } from '../trading/trading.service';

@Injectable()
export class TasksService {
  private readonly logger = new Logger(TasksService.name);

  constructor(private readonly tradingService: TradingService) {}

  @Cron(CronExpression.EVERY_HOUR)
  async handleTradingRewardsCron() {
    this.logger.log(`${TradingService.name} running`);
    await this.tradingService.calculate();
  }
}
