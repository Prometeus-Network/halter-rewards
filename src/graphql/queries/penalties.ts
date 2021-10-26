import { gql } from 'graphql-request';

export const Penalties = gql`
  query Penalties($filter: Penalty_filter, $offset: Int, $limit: Int) {
    penalties(
      where: $filter
      orderBy: timestamp
      skip: $offset
      first: $limit
    ) {
      id
      timestamp
      amount
    }
  }
`;
