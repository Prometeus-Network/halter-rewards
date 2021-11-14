import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { LiquidityService } from '../liquidity/liquidity.service';
import { StakingService } from '../staking/staking.service';
import { TradingService } from '../trading/trading.service';

CronExpression.EVERY_WEEKEND;
@Injectable()
export class TasksService {
  private readonly logger = new Logger(TasksService.name);

  constructor(
    private readonly tradingService: TradingService,
    private readonly stakingService: StakingService,
    private readonly liquidityService: LiquidityService,
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

  @Cron(CronExpression.EVERY_HOUR)
  async handleLiquidityCron() {
    this.logger.log(`${LiquidityService.name} running`);
    await this.liquidityService.calculate();
  }

  @Cron('59 23 * * 0', {
    timeZone: 'Europe/London',
  })
  async handleLiquidityPayoutCron() {
    this.logger.log(`${LiquidityService.name} running`);
    await this.liquidityService.payOut();
  }

  @Cron('59 23 * * 0', {
    timeZone: 'Europe/London',
  })
  async handleStakingRewardsSetCron() {
    this.logger.log(`${StakingService.name} week state running`);
    await this.stakingService.setWeekStateInContract();
  }
}
