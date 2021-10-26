import gql from 'graphql-tag';

export const Swaps = gql`
  query Swaps($filter: Swap_filter, $offset: Int, $limit: Int) {
    swaps(where: $filter, orderBy: timestamp, skip: $offset, first: $limit) {
      id
      tokenIn
      tokenOut
      tokenAmountIn
      tokenAmountOut
      caller
      tx
      fee
      timestamp
      poolId {
        id
      }
    }
  }
`;
