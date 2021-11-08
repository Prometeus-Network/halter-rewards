import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ethers } from 'ethers';

@Injectable()
export class WalletService {
  public readonly wallet: ethers.Wallet;
  public readonly provider: ethers.providers.JsonRpcProvider;

  constructor(private readonly configService: ConfigService) {
    this.provider = new ethers.providers.JsonRpcProvider(
      this.configService.get('rpc'),
    );

    this.wallet = new ethers.Wallet(
      this.configService.get('privateKey'),
      this.provider,
    );
  }
}
