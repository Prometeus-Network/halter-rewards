import BigNumber from 'bignumber.js';
import dayjs from 'dayjs';
import { Swap } from '../graphql';
import { TokensPrice } from '../types';
import { findClosestPrice } from './findClosestPrice';

export const getSwapTradeAmount = (swap: Swap, tokenPrices: TokensPrice) => {
  let tradeAmount = new BigNumber(0);
  const swapTimestamp = dayjs(swap.timestamp * 1000);

  if (tokenPrices[swap.tokenIn]) {
    const prices = tokenPrices[swap.tokenIn];

    tradeAmount = new BigNumber(swap.tokenAmountIn).multipliedBy(
      findClosestPrice(prices, swapTimestamp),
    );
  }

  if (tradeAmount.eq(0) && tokenPrices[swap.tokenOut]) {
    const prices = tokenPrices[swap.tokenOut];
    tradeAmount = new BigNumber(swap.tokenAmountOut).multipliedBy(
      findClosestPrice(prices, swapTimestamp),
    );
  }

  return tradeAmount;
};
