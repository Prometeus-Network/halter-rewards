import { Resolver, Query, Args } from '@nestjs/graphql';
import {
  TradingReward,
  TradingRewardVariables,
} from './schemas/trading-reward.schema';
import { TradingRewardsService } from './trading-rewards.service';

@Resolver(() => TradingReward)
export class TradingResolver {
  constructor(private readonly tradingRewardsService: TradingRewardsService) {}

  @Query(() => [TradingReward])
  async tradingRewards(@Args() input: TradingRewardVariables) {
    return this.tradingRewardsService.findAll(input);
  }
}
