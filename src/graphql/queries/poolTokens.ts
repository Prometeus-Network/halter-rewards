import gql from 'graphql-tag';

export const PoolTokens = gql`
  query PoolTokens($filter: PoolToken_filter) {
    poolTokens(where: $filter) {
      address
    }
  }
`;
