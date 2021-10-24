import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { WinstonModule, utilities } from 'nest-winston';
import winston from 'winston';
import { ConfigService } from '@nestjs/config';
import { AppConfig } from './config/types';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: WinstonModule.createLogger({
      level: 'debug',
      transports: [
        new winston.transports.Console({
          format: winston.format.combine(
            winston.format.timestamp(),
            winston.format.ms(),
            utilities.format.nestLike('Halter Rewards', {
              prettyPrint: true,
            }),
          ),
        }),
      ],
    }),
  });

  const configService: ConfigService<AppConfig> = app.get(ConfigService);

  await app.listen(configService.get('port', { infer: true }));
}
bootstrap();
