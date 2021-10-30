import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class Web3AuthGuard extends AuthGuard('web3') {
  private logger = new Logger(Web3AuthGuard.name);

  handleRequest(err: Error, user: any, info: any) {
    if (err || !user) {
      this.logger.log(info);
      throw new UnauthorizedException();
    }

    return user;
  }
}
