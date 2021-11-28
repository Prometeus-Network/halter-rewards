import { Module, Logger, OnModuleInit } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TradingModule } from './trading/trading.module';
import { TasksService } from './tasks/tasks.service';
import { ScheduleModule } from '@nestjs/schedule';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';
import { config } from './config';
import { AppConfig } from './config/types';
import { StakingModule } from './staking/staking.module';
import { PenaltyModule } from './penalty/penalty.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { WalletModule } from './wallet/wallet.module';
import { TerminusModule } from '@nestjs/terminus';
import { HealthController } from './health/health.controller';
import { LiquidityModule } from './liquidity/liquidity.module';
import { AppController } from './app/app.controller';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      introspection: true,
      playground: true,
    }),
    ConfigModule.forRoot({ load: [() => config] }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (config: ConfigService<AppConfig>) => {
        return {
          uri: config.get('mongodbURL'),
        };
      },
      inject: [ConfigService],
    }),
    ScheduleModule.forRoot(),
    TradingModule,
    StakingModule,
    PenaltyModule,
    AuthModule,
    UsersModule,
    WalletModule,
    TerminusModule,
    LiquidityModule,
  ],
  controllers: [HealthController, AppController],
  providers: [Logger, TasksService],
})
export class AppModule implements OnModuleInit {
  constructor(private readonly tasksService: TasksService) {}

  onModuleInit() {
    this.tasksService.handleTradingRewardsCron();
    this.tasksService.handleStakingRewardsCron();
    this.tasksService.handleLiquidityCron();
  }
}
