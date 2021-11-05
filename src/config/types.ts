import type { UnitTypeLongPlural } from 'dayjs';

export type AppConfig = {
  fleek: {
    key: string;
    secret: string;
  };
  port: string;
  subgraphURL: string;
  startTimestamp: string;
  duration: {
    value: number;
    metric: UnitTypeLongPlural;
  };
  mocksEnabled: boolean;
  mongodbURL: string;
  pools: string[];
  coinGecko: {
    tokenEquivalent: Record<
      string,
      {
        network: string;
        address: string;
      }
    >;
  };
  rewards: Record<string, number>;
  jwt: {
    secret: string;
  };
  privateKey: string;
  contracts: {
    tradingRewards: string;
  };
};

export type Network = 'testnet';
