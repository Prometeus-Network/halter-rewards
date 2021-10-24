import { Injectable } from '@nestjs/common';
import { graphqlClient } from '../config/graphql.client';
import type { SwapsQuery, SwapsQueryVariables } from '../graphql';
import { Swaps } from '../graphql/queries/swaps';

@Injectable()
export class SwapsService {
  async getSwaps(variables: SwapsQueryVariables = {}) {
    const { swaps } = await graphqlClient.request<
      SwapsQuery,
      SwapsQueryVariables
    >(Swaps, variables);

    return swaps;
  }

  async *getAllSwaps(
    variables: Omit<SwapsQueryVariables, 'limit' | 'offset'> = {},
  ) {
    let offset = 0;
    const limit = 5;

    let swaps = await this.getSwaps({
      ...variables,
      offset,
      limit,
    });
    yield swaps;

    while (swaps.length === limit) {
      offset += limit;
      swaps = await this.getSwaps({
        ...variables,
        offset,
        limit,
      });
      yield swaps;
    }
  }
}
