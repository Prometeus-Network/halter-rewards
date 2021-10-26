import { Injectable } from '@nestjs/common';
import { graphqlClient } from '../config/graphql.client';
import { PenaltiesQuery, PenaltiesQueryVariables } from '../graphql';
import { Penalties } from '../graphql/queries/penalties';

@Injectable()
export class PenaltyService {
  async getPenalties(variables: PenaltiesQueryVariables = {}) {
    const { penalties } = await graphqlClient.request<
      PenaltiesQuery,
      PenaltiesQueryVariables
    >(Penalties, variables);

    return penalties;
  }

  async *getAllPenalties(
    variables: Omit<PenaltiesQueryVariables, 'limit' | 'offset'> = {},
  ) {
    let offset = 0;
    const limit = 5;

    let penalties = await this.getPenalties({
      ...variables,
      offset,
      limit,
    });
    yield penalties;

    while (penalties.length === limit) {
      offset += limit;
      penalties = await this.getPenalties({
        ...variables,
        offset,
        limit,
      });
      yield penalties;
    }
  }
}
