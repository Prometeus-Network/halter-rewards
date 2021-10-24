import { Dayjs } from 'dayjs';

export const findClosestPrice = (
  prices: Array<Array<number>>,
  date: Dayjs,
): number => {
  const unixDate = date.unix();

  const [, bestPrice] = prices.reduce((best: number[], current: number[]) => {
    const [currentTimestamp] = current;
    const [bestTimestamp] = best;

    return currentTimestamp >= unixDate &&
      (!bestTimestamp || currentTimestamp < bestTimestamp)
      ? current
      : best;
  }, []);

  return bestPrice;
};
