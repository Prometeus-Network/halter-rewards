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
    metric: 'hours' | 'days' | string;
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
};

export type Network = 'testnet';
