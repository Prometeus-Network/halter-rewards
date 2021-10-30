import {
  CACHE_MANAGER,
  Inject,
  Injectable,
  Logger,
  UnauthorizedException,
} from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Cache } from 'cache-manager';
// import { Strategy } from 'passport-dapp-web3';
import { AuthService } from '../auth.service';
import { PassportWeb3Strategy } from './passport/PassportWeb3Strategy';

@Injectable()
export class Web3Strategy extends PassportStrategy(PassportWeb3Strategy) {
  private logger = new Logger(Web3Strategy.name);

  constructor(
    private readonly authService: AuthService,
    @Inject(CACHE_MANAGER) private readonly cacheManager: Cache,
  ) {
    super({
      passReqToCallback: true,
    });
  }

  async validate(_req: Request, address: string, message: string) {
    const user = await this.authService.validateUser(address);
    const cachedMessage = await this.cacheManager.get(address);
    await this.cacheManager.del(address);

    if (cachedMessage !== message) {
      this.logger.log(`Failed to verify message: ${address}`);
      throw new UnauthorizedException();
    }

    if (!user) {
      this.logger.log(`Failed to authorized: ${address}`);
      throw new UnauthorizedException();
    }

    return user;
  }
}
