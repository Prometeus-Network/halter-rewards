import {
  Controller,
  Post,
  UseGuards,
  Request,
  Body,
  CACHE_MANAGER,
  Inject,
} from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { Web3AuthGuard } from './guards/web3-auth.guard';
import { Cache } from 'cache-manager';
import { ethers, utils } from 'ethers';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(
    @Inject(CACHE_MANAGER) private readonly cacheManager: Cache,
    private readonly authService: AuthService,
  ) {}

  @UseGuards(Web3AuthGuard)
  @Post('login')
  async login(@Request() req: any) {
    const token = await this.authService.login(req.user.address);

    return {
      token,
    };
  }

  @Post('message')
  async createMessage(@Body() body: CreateMessageDto) {
    const address = ethers.utils.verifyMessage(
      'Create authentication secret',
      body.signature,
    );

    const randomMessage = utils.keccak256(utils.randomBytes(20));

    this.cacheManager.set(address, randomMessage, { ttl: 60 * 5 });

    return {
      message: randomMessage,
    };
  }
}
