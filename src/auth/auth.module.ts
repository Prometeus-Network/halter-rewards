import { CacheModule, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from '../users/users.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { Web3Strategy } from './strategies/web3.strategy';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    ConfigModule,
    CacheModule.register(),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (config: ConfigService) => ({
        secret: config.get('jwt.secret'),
        signOptions: { expiresIn: '30m' },
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [AuthService, Web3Strategy, JwtStrategy],
  exports: [Web3Strategy, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
