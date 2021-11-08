type Phase = {
  week: number;
  start: number;
  end: number;
  rewards: number;
};

export type AppConfig = {
  fleek: {
    key: string;
    secret: string;
  };
  port: string;
  subgraphURL: string;
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
  phases: {
    trading: Phase[];
    liquidity: Phase[];
    staking: Phase[];
  };
  jwt: {
    secret: string;
  };
  privateKey: string;
  contracts: {
    staking: string;
    tradingRewards: string;
  };
};

export type Network = 'testnet';
