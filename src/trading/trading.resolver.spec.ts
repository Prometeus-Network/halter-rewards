import { Test, TestingModule } from '@nestjs/testing';
import { TradingResolver } from './trading.resolver';

describe('TradingResolver', () => {
  let resolver: TradingResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TradingResolver],
    }).compile();

    resolver = module.get<TradingResolver>(TradingResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
