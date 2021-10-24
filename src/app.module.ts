import { Module, Logger, OnModuleInit } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TradingModule } from './trading/trading.module';
import { TasksService } from './tasks/tasks.service';
import { ScheduleModule } from '@nestjs/schedule';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';
import { config } from './config';
import { AppConfig } from './config/types';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: true,
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
  ],
  controllers: [AppController],
  providers: [Logger, AppService, TasksService],
})
export class AppModule implements OnModuleInit {
  constructor(private readonly tasksService: TasksService) {}

  onModuleInit() {
    this.tasksService.handleTradingRewardsCron();
  }
}
