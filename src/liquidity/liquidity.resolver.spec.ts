import { Test, TestingModule } from '@nestjs/testing';
import { LiquidityResolver } from './liquidity.resolver';

describe('LiquidityResolver', () => {
  let resolver: LiquidityResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LiquidityResolver],
    }).compile();

    resolver = module.get<LiquidityResolver>(LiquidityResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
