import { Args, Query, Resolver } from '@nestjs/graphql';
import {
  StakingReward,
  StakingRewardVariables,
} from './schemas/staking-reward.schema';
import { StakingRewardsService } from './staking-rewards/staking-rewards.service';

@Resolver(() => StakingReward)
export class StakingResolver {
  constructor(private stakingRewardsService: StakingRewardsService) {}

  @Query(() => [StakingReward])
  async stakingRewards(@Args() input: StakingRewardVariables) {
    return this.stakingRewardsService.findAll(input);
  }
}
