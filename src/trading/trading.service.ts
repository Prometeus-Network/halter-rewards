import { Injectable, Logger } from '@nestjs/common';
import dayjs, { Dayjs } from 'dayjs';
import BigNumber from 'bignumber.js';
import { config } from '../config';
import { coinGeckoClient } from '../config/coingecko.client';
import { graphqlClient } from '../config/graphql.client';
import { PoolTokensQuery, PoolTokensQueryVariables, Swap } from '../graphql';
import { PoolTokens } from '../graphql/queries/poolTokens';
import { SwapsService } from '../swaps/swaps.service';
import { getSwapTradeAmount } from '../utils/getSwapTradeAmount';
import { TokensPrice } from '../types';
import { TradingRewardsService } from './trading-rewards.service';

@Injectable()
export class TradingService {
  private readonly logger: Logger = new Logger(TradingService.name);

  constructor(
    private readonly swapsService: SwapsService,
    private readonly tradingRewardService: TradingRewardsService,
  ) {}

  async calculate() {
    const poolTokens = await this.getPoolTokens();

    for (const phase of config.phases.trading) {
      this.logger.log(`Processing phase ${phase.week + 1}`);
      const startTime = dayjs.unix(phase.start);
      const endTime = dayjs.unix(phase.end);

      if (dayjs().diff(endTime) > 0) {
        this.logger.log('Phase is over...');
        const isPhaseExists = await this.tradingRewardService.isPaseExists(
          phase.week,
        );

        if (isPhaseExists) {
          continue;
        }
      }

      this.logger.log(startTime.format());
      this.logger.log(endTime.format());

      const prices = await this.fetchTokenPrices(
        poolTokens,
        startTime,
        endTime,
      );

      await this.processSwaps(startTime, endTime, prices, phase.week);
    }
  }

  async processSwaps(
    start: Dayjs,
    end: Dayjs,
    prices: TokensPrice,
    phase: number,
  ) {
    const allSwaps = this.swapsService.getAllSwaps({
      filter: {
        timestamp_gte: start.unix(),
        timestamp_lt: end.unix(),
      },
    });

    let swapsCount = 0;
    let totalTradeVolume = new BigNumber(0);
    const usersTradeVolume = new Map<string, BigNumber>();

    let { value: swaps } = await allSwaps.next();

    while (swaps) {
      swapsCount += swaps.length;
      swaps.forEach((swap) => {
        const currentUserTradeVolume =
          usersTradeVolume.get(swap.caller) ?? new BigNumber(0);

        const swapTradeAmount = getSwapTradeAmount(swap as Swap, prices);

        usersTradeVolume.set(
          swap.caller,
          currentUserTradeVolume.plus(swapTradeAmount),
        );

        totalTradeVolume = totalTradeVolume.plus(swapTradeAmount);
      });

      swaps = (await allSwaps.next()).value;
    }

    const calculatedUserRewards = new Map();

    this.logger.log(`Swaps count: ${swapsCount}`);
    for (const [address, volume] of usersTradeVolume.entries()) {
      calculatedUserRewards.set(address, volume.dividedBy(totalTradeVolume));
    }

    this.logger.log('Calculated user rewards');

    for (const [address, percentage] of calculatedUserRewards) {
      await this.tradingRewardService.createOrUpdate({
        address,
        percentage,
        phase,
        tradeVolumeUSD: usersTradeVolume.get(address).toString(),
      });
    }
  }

  async getPoolTokens() {
    this.logger.verbose('Fetching pool tokens...');

    const { poolTokens } = await graphqlClient.request<
      PoolTokensQuery,
      PoolTokensQueryVariables
    >(PoolTokens, { filter: { poolId_in: config.pools } });

    this.logger.verbose('Fetched pool tokens');

    return Array.from(
      new Set(poolTokens.map((poolToken) => poolToken.address)),
    );
  }

  async fetchTokenPrices(tokens: string[], startTime: Dayjs, endTime: Dayjs) {
    const tokenPrices: TokensPrice = {};

    for (const token of tokens) {
      const { address, network } =
        config.coinGecko.tokenEquivalent[token] || {};

      const contractAddress = address || token;

      this.logger.verbose(`Fetching token price ${contractAddress}...`);

      const result = await coinGeckoClient.contractMarketChartRange({
        id: network || ('fantom' as any),
        contract_address: contractAddress,
        from: startTime.unix(),
        to: endTime.unix(),
        vs_currency: 'usd',
      });

      tokenPrices[token] = result.prices;

      this.logger.verbose(`Fetched token price ${contractAddress}`);
    }

    return tokenPrices;
  }
}
