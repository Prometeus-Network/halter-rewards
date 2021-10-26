import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { StakingService } from '../staking/staking.service';
import { TradingService } from '../trading/trading.service';

@Injectable()
export class TasksService {
  private readonly logger = new Logger(TasksService.name);

  constructor(
    private readonly tradingService: TradingService,
    private readonly stakingService: StakingService,
  ) {}

  @Cron(CronExpression.EVERY_HOUR)
  async handleTradingRewardsCron() {
    this.logger.log(`${TradingService.name} running`);
    await this.tradingService.calculate();
  }

  @Cron(CronExpression.EVERY_HOUR)
  async handleStakingRewardsCron() {
    this.logger.log(`${StakingService.name} running`);
    await this.stakingService.calculate();
  }
}
