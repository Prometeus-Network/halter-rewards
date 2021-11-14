import { Args, Resolver, Query } from '@nestjs/graphql';
import { LiquidityService } from './liquidity.service';
import {
  LiquidityReward,
  LiquidityRewardVariables,
} from './schemas/liquidity-reward.schema';

@Resolver()
export class LiquidityResolver {
  constructor(private readonly liquidityService: LiquidityService) {}

  @Query(() => [LiquidityReward])
  async liquidityRewards(@Args() input: LiquidityRewardVariables) {
    return this.liquidityService.findAll(input);
  }
}
