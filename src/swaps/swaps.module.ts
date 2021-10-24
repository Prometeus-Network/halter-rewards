import { Module } from '@nestjs/common';
import { SwapsService } from './swaps.service';

@Module({
  providers: [SwapsService],
  exports: [SwapsService],
})
export class SwapsModule {}
