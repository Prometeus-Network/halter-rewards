export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: any;
  BigInt: any;
  Bytes: any;
};

export type Balancer = {
  __typename?: 'Balancer';
  id: Scalars['ID'];
  poolCount: Scalars['Int'];
  pools?: Maybe<Array<Pool>>;
  totalLiquidity: Scalars['BigDecimal'];
  totalSwapVolume: Scalars['BigDecimal'];
  totalSwapFee: Scalars['BigDecimal'];
};


export type BalancerPoolsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Pool_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Pool_Filter>;
};

export type Balancer_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  poolCount?: Maybe<Scalars['Int']>;
  poolCount_not?: Maybe<Scalars['Int']>;
  poolCount_gt?: Maybe<Scalars['Int']>;
  poolCount_lt?: Maybe<Scalars['Int']>;
  poolCount_gte?: Maybe<Scalars['Int']>;
  poolCount_lte?: Maybe<Scalars['Int']>;
  poolCount_in?: Maybe<Array<Scalars['Int']>>;
  poolCount_not_in?: Maybe<Array<Scalars['Int']>>;
  totalLiquidity?: Maybe<Scalars['BigDecimal']>;
  totalLiquidity_not?: Maybe<Scalars['BigDecimal']>;
  totalLiquidity_gt?: Maybe<Scalars['BigDecimal']>;
  totalLiquidity_lt?: Maybe<Scalars['BigDecimal']>;
  totalLiquidity_gte?: Maybe<Scalars['BigDecimal']>;
  totalLiquidity_lte?: Maybe<Scalars['BigDecimal']>;
  totalLiquidity_in?: Maybe<Array<Scalars['BigDecimal']>>;
  totalLiquidity_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  totalSwapVolume?: Maybe<Scalars['BigDecimal']>;
  totalSwapVolume_not?: Maybe<Scalars['BigDecimal']>;
  totalSwapVolume_gt?: Maybe<Scalars['BigDecimal']>;
  totalSwapVolume_lt?: Maybe<Scalars['BigDecimal']>;
  totalSwapVolume_gte?: Maybe<Scalars['BigDecimal']>;
  totalSwapVolume_lte?: Maybe<Scalars['BigDecimal']>;
  totalSwapVolume_in?: Maybe<Array<Scalars['BigDecimal']>>;
  totalSwapVolume_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  totalSwapFee?: Maybe<Scalars['BigDecimal']>;
  totalSwapFee_not?: Maybe<Scalars['BigDecimal']>;
  totalSwapFee_gt?: Maybe<Scalars['BigDecimal']>;
  totalSwapFee_lt?: Maybe<Scalars['BigDecimal']>;
  totalSwapFee_gte?: Maybe<Scalars['BigDecimal']>;
  totalSwapFee_lte?: Maybe<Scalars['BigDecimal']>;
  totalSwapFee_in?: Maybe<Array<Scalars['BigDecimal']>>;
  totalSwapFee_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
};

export enum Balancer_OrderBy {
  Id = 'id',
  PoolCount = 'poolCount',
  Pools = 'pools',
  TotalLiquidity = 'totalLiquidity',
  TotalSwapVolume = 'totalSwapVolume',
  TotalSwapFee = 'totalSwapFee'
}

export type Block_Height = {
  hash?: Maybe<Scalars['Bytes']>;
  number?: Maybe<Scalars['Int']>;
};

export type GradualWeightUpdate = {
  __typename?: 'GradualWeightUpdate';
  id: Scalars['ID'];
  poolId: Pool;
  scheduledTimestamp: Scalars['Int'];
  startTimestamp: Scalars['Int'];
  endTimestamp: Scalars['Int'];
  startWeights: Array<Scalars['BigInt']>;
  endWeights: Array<Scalars['BigInt']>;
};

export type GradualWeightUpdate_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  poolId?: Maybe<Scalars['String']>;
  poolId_not?: Maybe<Scalars['String']>;
  poolId_gt?: Maybe<Scalars['String']>;
  poolId_lt?: Maybe<Scalars['String']>;
  poolId_gte?: Maybe<Scalars['String']>;
  poolId_lte?: Maybe<Scalars['String']>;
  poolId_in?: Maybe<Array<Scalars['String']>>;
  poolId_not_in?: Maybe<Array<Scalars['String']>>;
  poolId_contains?: Maybe<Scalars['String']>;
  poolId_not_contains?: Maybe<Scalars['String']>;
  poolId_starts_with?: Maybe<Scalars['String']>;
  poolId_not_starts_with?: Maybe<Scalars['String']>;
  poolId_ends_with?: Maybe<Scalars['String']>;
  poolId_not_ends_with?: Maybe<Scalars['String']>;
  scheduledTimestamp?: Maybe<Scalars['Int']>;
  scheduledTimestamp_not?: Maybe<Scalars['Int']>;
  scheduledTimestamp_gt?: Maybe<Scalars['Int']>;
  scheduledTimestamp_lt?: Maybe<Scalars['Int']>;
  scheduledTimestamp_gte?: Maybe<Scalars['Int']>;
  scheduledTimestamp_lte?: Maybe<Scalars['Int']>;
  scheduledTimestamp_in?: Maybe<Array<Scalars['Int']>>;
  scheduledTimestamp_not_in?: Maybe<Array<Scalars['Int']>>;
  startTimestamp?: Maybe<Scalars['Int']>;
  startTimestamp_not?: Maybe<Scalars['Int']>;
  startTimestamp_gt?: Maybe<Scalars['Int']>;
  startTimestamp_lt?: Maybe<Scalars['Int']>;
  startTimestamp_gte?: Maybe<Scalars['Int']>;
  startTimestamp_lte?: Maybe<Scalars['Int']>;
  startTimestamp_in?: Maybe<Array<Scalars['Int']>>;
  startTimestamp_not_in?: Maybe<Array<Scalars['Int']>>;
  endTimestamp?: Maybe<Scalars['Int']>;
  endTimestamp_not?: Maybe<Scalars['Int']>;
  endTimestamp_gt?: Maybe<Scalars['Int']>;
  endTimestamp_lt?: Maybe<Scalars['Int']>;
  endTimestamp_gte?: Maybe<Scalars['Int']>;
  endTimestamp_lte?: Maybe<Scalars['Int']>;
  endTimestamp_in?: Maybe<Array<Scalars['Int']>>;
  endTimestamp_not_in?: Maybe<Array<Scalars['Int']>>;
  startWeights?: Maybe<Array<Scalars['BigInt']>>;
  startWeights_not?: Maybe<Array<Scalars['BigInt']>>;
  startWeights_contains?: Maybe<Array<Scalars['BigInt']>>;
  startWeights_not_contains?: Maybe<Array<Scalars['BigInt']>>;
  endWeights?: Maybe<Array<Scalars['BigInt']>>;
  endWeights_not?: Maybe<Array<Scalars['BigInt']>>;
  endWeights_contains?: Maybe<Array<Scalars['BigInt']>>;
  endWeights_not_contains?: Maybe<Array<Scalars['BigInt']>>;
};

export enum GradualWeightUpdate_OrderBy {
  Id = 'id',
  PoolId = 'poolId',
  ScheduledTimestamp = 'scheduledTimestamp',
  StartTimestamp = 'startTimestamp',
  EndTimestamp = 'endTimestamp',
  StartWeights = 'startWeights',
  EndWeights = 'endWeights'
}

export enum InvestType {
  Join = 'Join',
  Exit = 'Exit'
}

export type Investment = {
  __typename?: 'Investment';
  id: Scalars['ID'];
  assetManagerAddress: Scalars['Bytes'];
  amount: Scalars['BigDecimal'];
  poolTokenId: PoolToken;
  timestamp: Scalars['Int'];
};

export type Investment_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  assetManagerAddress?: Maybe<Scalars['Bytes']>;
  assetManagerAddress_not?: Maybe<Scalars['Bytes']>;
  assetManagerAddress_in?: Maybe<Array<Scalars['Bytes']>>;
  assetManagerAddress_not_in?: Maybe<Array<Scalars['Bytes']>>;
  assetManagerAddress_contains?: Maybe<Scalars['Bytes']>;
  assetManagerAddress_not_contains?: Maybe<Scalars['Bytes']>;
  amount?: Maybe<Scalars['BigDecimal']>;
  amount_not?: Maybe<Scalars['BigDecimal']>;
  amount_gt?: Maybe<Scalars['BigDecimal']>;
  amount_lt?: Maybe<Scalars['BigDecimal']>;
  amount_gte?: Maybe<Scalars['BigDecimal']>;
  amount_lte?: Maybe<Scalars['BigDecimal']>;
  amount_in?: Maybe<Array<Scalars['BigDecimal']>>;
  amount_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  poolTokenId?: Maybe<Scalars['String']>;
  poolTokenId_not?: Maybe<Scalars['String']>;
  poolTokenId_gt?: Maybe<Scalars['String']>;
  poolTokenId_lt?: Maybe<Scalars['String']>;
  poolTokenId_gte?: Maybe<Scalars['String']>;
  poolTokenId_lte?: Maybe<Scalars['String']>;
  poolTokenId_in?: Maybe<Array<Scalars['String']>>;
  poolTokenId_not_in?: Maybe<Array<Scalars['String']>>;
  poolTokenId_contains?: Maybe<Scalars['String']>;
  poolTokenId_not_contains?: Maybe<Scalars['String']>;
  poolTokenId_starts_with?: Maybe<Scalars['String']>;
  poolTokenId_not_starts_with?: Maybe<Scalars['String']>;
  poolTokenId_ends_with?: Maybe<Scalars['String']>;
  poolTokenId_not_ends_with?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['Int']>;
  timestamp_not?: Maybe<Scalars['Int']>;
  timestamp_gt?: Maybe<Scalars['Int']>;
  timestamp_lt?: Maybe<Scalars['Int']>;
  timestamp_gte?: Maybe<Scalars['Int']>;
  timestamp_lte?: Maybe<Scalars['Int']>;
  timestamp_in?: Maybe<Array<Scalars['Int']>>;
  timestamp_not_in?: Maybe<Array<Scalars['Int']>>;
};

export enum Investment_OrderBy {
  Id = 'id',
  AssetManagerAddress = 'assetManagerAddress',
  Amount = 'amount',
  PoolTokenId = 'poolTokenId',
  Timestamp = 'timestamp'
}

export type JoinExit = {
  __typename?: 'JoinExit';
  id: Scalars['ID'];
  type: InvestType;
  sender: Scalars['Bytes'];
  amounts: Array<Scalars['BigDecimal']>;
  pool: Pool;
  user: User;
  timestamp: Scalars['Int'];
  tx: Scalars['Bytes'];
};

export type JoinExit_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  type?: Maybe<InvestType>;
  type_not?: Maybe<InvestType>;
  sender?: Maybe<Scalars['Bytes']>;
  sender_not?: Maybe<Scalars['Bytes']>;
  sender_in?: Maybe<Array<Scalars['Bytes']>>;
  sender_not_in?: Maybe<Array<Scalars['Bytes']>>;
  sender_contains?: Maybe<Scalars['Bytes']>;
  sender_not_contains?: Maybe<Scalars['Bytes']>;
  amounts?: Maybe<Array<Scalars['BigDecimal']>>;
  amounts_not?: Maybe<Array<Scalars['BigDecimal']>>;
  amounts_contains?: Maybe<Array<Scalars['BigDecimal']>>;
  amounts_not_contains?: Maybe<Array<Scalars['BigDecimal']>>;
  pool?: Maybe<Scalars['String']>;
  pool_not?: Maybe<Scalars['String']>;
  pool_gt?: Maybe<Scalars['String']>;
  pool_lt?: Maybe<Scalars['String']>;
  pool_gte?: Maybe<Scalars['String']>;
  pool_lte?: Maybe<Scalars['String']>;
  pool_in?: Maybe<Array<Scalars['String']>>;
  pool_not_in?: Maybe<Array<Scalars['String']>>;
  pool_contains?: Maybe<Scalars['String']>;
  pool_not_contains?: Maybe<Scalars['String']>;
  pool_starts_with?: Maybe<Scalars['String']>;
  pool_not_starts_with?: Maybe<Scalars['String']>;
  pool_ends_with?: Maybe<Scalars['String']>;
  pool_not_ends_with?: Maybe<Scalars['String']>;
  user?: Maybe<Scalars['String']>;
  user_not?: Maybe<Scalars['String']>;
  user_gt?: Maybe<Scalars['String']>;
  user_lt?: Maybe<Scalars['String']>;
  user_gte?: Maybe<Scalars['String']>;
  user_lte?: Maybe<Scalars['String']>;
  user_in?: Maybe<Array<Scalars['String']>>;
  user_not_in?: Maybe<Array<Scalars['String']>>;
  user_contains?: Maybe<Scalars['String']>;
  user_not_contains?: Maybe<Scalars['String']>;
  user_starts_with?: Maybe<Scalars['String']>;
  user_not_starts_with?: Maybe<Scalars['String']>;
  user_ends_with?: Maybe<Scalars['String']>;
  user_not_ends_with?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['Int']>;
  timestamp_not?: Maybe<Scalars['Int']>;
  timestamp_gt?: Maybe<Scalars['Int']>;
  timestamp_lt?: Maybe<Scalars['Int']>;
  timestamp_gte?: Maybe<Scalars['Int']>;
  timestamp_lte?: Maybe<Scalars['Int']>;
  timestamp_in?: Maybe<Array<Scalars['Int']>>;
  timestamp_not_in?: Maybe<Array<Scalars['Int']>>;
  tx?: Maybe<Scalars['Bytes']>;
  tx_not?: Maybe<Scalars['Bytes']>;
  tx_in?: Maybe<Array<Scalars['Bytes']>>;
  tx_not_in?: Maybe<Array<Scalars['Bytes']>>;
  tx_contains?: Maybe<Scalars['Bytes']>;
  tx_not_contains?: Maybe<Scalars['Bytes']>;
};

export enum JoinExit_OrderBy {
  Id = 'id',
  Type = 'type',
  Sender = 'sender',
  Amounts = 'amounts',
  Pool = 'pool',
  User = 'user',
  Timestamp = 'timestamp',
  Tx = 'tx'
}

export type LatestPrice = {
  __typename?: 'LatestPrice';
  id: Scalars['ID'];
  asset: Scalars['Bytes'];
  pricingAsset: Scalars['Bytes'];
  poolId: Pool;
  price: Scalars['BigDecimal'];
  block: Scalars['BigInt'];
};

export type LatestPrice_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  asset?: Maybe<Scalars['Bytes']>;
  asset_not?: Maybe<Scalars['Bytes']>;
  asset_in?: Maybe<Array<Scalars['Bytes']>>;
  asset_not_in?: Maybe<Array<Scalars['Bytes']>>;
  asset_contains?: Maybe<Scalars['Bytes']>;
  asset_not_contains?: Maybe<Scalars['Bytes']>;
  pricingAsset?: Maybe<Scalars['Bytes']>;
  pricingAsset_not?: Maybe<Scalars['Bytes']>;
  pricingAsset_in?: Maybe<Array<Scalars['Bytes']>>;
  pricingAsset_not_in?: Maybe<Array<Scalars['Bytes']>>;
  pricingAsset_contains?: Maybe<Scalars['Bytes']>;
  pricingAsset_not_contains?: Maybe<Scalars['Bytes']>;
  poolId?: Maybe<Scalars['String']>;
  poolId_not?: Maybe<Scalars['String']>;
  poolId_gt?: Maybe<Scalars['String']>;
  poolId_lt?: Maybe<Scalars['String']>;
  poolId_gte?: Maybe<Scalars['String']>;
  poolId_lte?: Maybe<Scalars['String']>;
  poolId_in?: Maybe<Array<Scalars['String']>>;
  poolId_not_in?: Maybe<Array<Scalars['String']>>;
  poolId_contains?: Maybe<Scalars['String']>;
  poolId_not_contains?: Maybe<Scalars['String']>;
  poolId_starts_with?: Maybe<Scalars['String']>;
  poolId_not_starts_with?: Maybe<Scalars['String']>;
  poolId_ends_with?: Maybe<Scalars['String']>;
  poolId_not_ends_with?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['BigDecimal']>;
  price_not?: Maybe<Scalars['BigDecimal']>;
  price_gt?: Maybe<Scalars['BigDecimal']>;
  price_lt?: Maybe<Scalars['BigDecimal']>;
  price_gte?: Maybe<Scalars['BigDecimal']>;
  price_lte?: Maybe<Scalars['BigDecimal']>;
  price_in?: Maybe<Array<Scalars['BigDecimal']>>;
  price_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  block?: Maybe<Scalars['BigInt']>;
  block_not?: Maybe<Scalars['BigInt']>;
  block_gt?: Maybe<Scalars['BigInt']>;
  block_lt?: Maybe<Scalars['BigInt']>;
  block_gte?: Maybe<Scalars['BigInt']>;
  block_lte?: Maybe<Scalars['BigInt']>;
  block_in?: Maybe<Array<Scalars['BigInt']>>;
  block_not_in?: Maybe<Array<Scalars['BigInt']>>;
};

export enum LatestPrice_OrderBy {
  Id = 'id',
  Asset = 'asset',
  PricingAsset = 'pricingAsset',
  PoolId = 'poolId',
  Price = 'price',
  Block = 'block'
}

export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type Pool = {
  __typename?: 'Pool';
  id: Scalars['ID'];
  address: Scalars['Bytes'];
  poolType?: Maybe<Scalars['String']>;
  factory?: Maybe<Scalars['Bytes']>;
  strategyType: Scalars['Int'];
  symbol?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  swapEnabled: Scalars['Boolean'];
  swapFee: Scalars['BigDecimal'];
  owner?: Maybe<Scalars['Bytes']>;
  totalWeight?: Maybe<Scalars['BigDecimal']>;
  totalSwapVolume: Scalars['BigDecimal'];
  totalSwapFee: Scalars['BigDecimal'];
  totalLiquidity: Scalars['BigDecimal'];
  totalShares: Scalars['BigDecimal'];
  createTime: Scalars['Int'];
  swapsCount: Scalars['BigInt'];
  holdersCount: Scalars['BigInt'];
  vaultID: Balancer;
  tx?: Maybe<Scalars['Bytes']>;
  tokensList: Array<Scalars['Bytes']>;
  tokens?: Maybe<Array<PoolToken>>;
  swaps?: Maybe<Array<Swap>>;
  shares?: Maybe<Array<PoolShare>>;
  historicalValues?: Maybe<Array<PoolHistoricalLiquidity>>;
  weightUpdates?: Maybe<Array<GradualWeightUpdate>>;
  amp?: Maybe<Scalars['BigInt']>;
  priceRateProviders?: Maybe<Array<PriceRateProvider>>;
  principalToken?: Maybe<Scalars['Bytes']>;
  baseToken?: Maybe<Scalars['Bytes']>;
  expiryTime?: Maybe<Scalars['BigInt']>;
  unitSeconds?: Maybe<Scalars['BigInt']>;
  managementFee?: Maybe<Scalars['BigDecimal']>;
};


export type PoolTokensArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PoolToken_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<PoolToken_Filter>;
};


export type PoolSwapsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Swap_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Swap_Filter>;
};


export type PoolSharesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PoolShare_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<PoolShare_Filter>;
};


export type PoolHistoricalValuesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PoolHistoricalLiquidity_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<PoolHistoricalLiquidity_Filter>;
};


export type PoolWeightUpdatesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<GradualWeightUpdate_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<GradualWeightUpdate_Filter>;
};


export type PoolPriceRateProvidersArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PriceRateProvider_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<PriceRateProvider_Filter>;
};

export type PoolHistoricalLiquidity = {
  __typename?: 'PoolHistoricalLiquidity';
  id: Scalars['ID'];
  poolId: Pool;
  poolTotalShares: Scalars['BigDecimal'];
  poolLiquidity: Scalars['BigDecimal'];
  poolShareValue: Scalars['BigDecimal'];
  pricingAsset: Scalars['Bytes'];
  block: Scalars['BigInt'];
};

export type PoolHistoricalLiquidity_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  poolId?: Maybe<Scalars['String']>;
  poolId_not?: Maybe<Scalars['String']>;
  poolId_gt?: Maybe<Scalars['String']>;
  poolId_lt?: Maybe<Scalars['String']>;
  poolId_gte?: Maybe<Scalars['String']>;
  poolId_lte?: Maybe<Scalars['String']>;
  poolId_in?: Maybe<Array<Scalars['String']>>;
  poolId_not_in?: Maybe<Array<Scalars['String']>>;
  poolId_contains?: Maybe<Scalars['String']>;
  poolId_not_contains?: Maybe<Scalars['String']>;
  poolId_starts_with?: Maybe<Scalars['String']>;
  poolId_not_starts_with?: Maybe<Scalars['String']>;
  poolId_ends_with?: Maybe<Scalars['String']>;
  poolId_not_ends_with?: Maybe<Scalars['String']>;
  poolTotalShares?: Maybe<Scalars['BigDecimal']>;
  poolTotalShares_not?: Maybe<Scalars['BigDecimal']>;
  poolTotalShares_gt?: Maybe<Scalars['BigDecimal']>;
  poolTotalShares_lt?: Maybe<Scalars['BigDecimal']>;
  poolTotalShares_gte?: Maybe<Scalars['BigDecimal']>;
  poolTotalShares_lte?: Maybe<Scalars['BigDecimal']>;
  poolTotalShares_in?: Maybe<Array<Scalars['BigDecimal']>>;
  poolTotalShares_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  poolLiquidity?: Maybe<Scalars['BigDecimal']>;
  poolLiquidity_not?: Maybe<Scalars['BigDecimal']>;
  poolLiquidity_gt?: Maybe<Scalars['BigDecimal']>;
  poolLiquidity_lt?: Maybe<Scalars['BigDecimal']>;
  poolLiquidity_gte?: Maybe<Scalars['BigDecimal']>;
  poolLiquidity_lte?: Maybe<Scalars['BigDecimal']>;
  poolLiquidity_in?: Maybe<Array<Scalars['BigDecimal']>>;
  poolLiquidity_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  poolShareValue?: Maybe<Scalars['BigDecimal']>;
  poolShareValue_not?: Maybe<Scalars['BigDecimal']>;
  poolShareValue_gt?: Maybe<Scalars['BigDecimal']>;
  poolShareValue_lt?: Maybe<Scalars['BigDecimal']>;
  poolShareValue_gte?: Maybe<Scalars['BigDecimal']>;
  poolShareValue_lte?: Maybe<Scalars['BigDecimal']>;
  poolShareValue_in?: Maybe<Array<Scalars['BigDecimal']>>;
  poolShareValue_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  pricingAsset?: Maybe<Scalars['Bytes']>;
  pricingAsset_not?: Maybe<Scalars['Bytes']>;
  pricingAsset_in?: Maybe<Array<Scalars['Bytes']>>;
  pricingAsset_not_in?: Maybe<Array<Scalars['Bytes']>>;
  pricingAsset_contains?: Maybe<Scalars['Bytes']>;
  pricingAsset_not_contains?: Maybe<Scalars['Bytes']>;
  block?: Maybe<Scalars['BigInt']>;
  block_not?: Maybe<Scalars['BigInt']>;
  block_gt?: Maybe<Scalars['BigInt']>;
  block_lt?: Maybe<Scalars['BigInt']>;
  block_gte?: Maybe<Scalars['BigInt']>;
  block_lte?: Maybe<Scalars['BigInt']>;
  block_in?: Maybe<Array<Scalars['BigInt']>>;
  block_not_in?: Maybe<Array<Scalars['BigInt']>>;
};

export enum PoolHistoricalLiquidity_OrderBy {
  Id = 'id',
  PoolId = 'poolId',
  PoolTotalShares = 'poolTotalShares',
  PoolLiquidity = 'poolLiquidity',
  PoolShareValue = 'poolShareValue',
  PricingAsset = 'pricingAsset',
  Block = 'block'
}

export type PoolShare = {
  __typename?: 'PoolShare';
  id: Scalars['ID'];
  userAddress: User;
  poolId: Pool;
  balance: Scalars['BigDecimal'];
};

export type PoolShare_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  userAddress?: Maybe<Scalars['String']>;
  userAddress_not?: Maybe<Scalars['String']>;
  userAddress_gt?: Maybe<Scalars['String']>;
  userAddress_lt?: Maybe<Scalars['String']>;
  userAddress_gte?: Maybe<Scalars['String']>;
  userAddress_lte?: Maybe<Scalars['String']>;
  userAddress_in?: Maybe<Array<Scalars['String']>>;
  userAddress_not_in?: Maybe<Array<Scalars['String']>>;
  userAddress_contains?: Maybe<Scalars['String']>;
  userAddress_not_contains?: Maybe<Scalars['String']>;
  userAddress_starts_with?: Maybe<Scalars['String']>;
  userAddress_not_starts_with?: Maybe<Scalars['String']>;
  userAddress_ends_with?: Maybe<Scalars['String']>;
  userAddress_not_ends_with?: Maybe<Scalars['String']>;
  poolId?: Maybe<Scalars['String']>;
  poolId_not?: Maybe<Scalars['String']>;
  poolId_gt?: Maybe<Scalars['String']>;
  poolId_lt?: Maybe<Scalars['String']>;
  poolId_gte?: Maybe<Scalars['String']>;
  poolId_lte?: Maybe<Scalars['String']>;
  poolId_in?: Maybe<Array<Scalars['String']>>;
  poolId_not_in?: Maybe<Array<Scalars['String']>>;
  poolId_contains?: Maybe<Scalars['String']>;
  poolId_not_contains?: Maybe<Scalars['String']>;
  poolId_starts_with?: Maybe<Scalars['String']>;
  poolId_not_starts_with?: Maybe<Scalars['String']>;
  poolId_ends_with?: Maybe<Scalars['String']>;
  poolId_not_ends_with?: Maybe<Scalars['String']>;
  balance?: Maybe<Scalars['BigDecimal']>;
  balance_not?: Maybe<Scalars['BigDecimal']>;
  balance_gt?: Maybe<Scalars['BigDecimal']>;
  balance_lt?: Maybe<Scalars['BigDecimal']>;
  balance_gte?: Maybe<Scalars['BigDecimal']>;
  balance_lte?: Maybe<Scalars['BigDecimal']>;
  balance_in?: Maybe<Array<Scalars['BigDecimal']>>;
  balance_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
};

export enum PoolShare_OrderBy {
  Id = 'id',
  UserAddress = 'userAddress',
  PoolId = 'poolId',
  Balance = 'balance'
}

export type PoolSnapshot = {
  __typename?: 'PoolSnapshot';
  id: Scalars['ID'];
  pool: Pool;
  amounts: Array<Scalars['BigDecimal']>;
  totalShares: Scalars['BigDecimal'];
  swapVolume: Scalars['BigDecimal'];
  swapFees: Scalars['BigDecimal'];
  timestamp: Scalars['Int'];
};

export type PoolSnapshot_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  pool?: Maybe<Scalars['String']>;
  pool_not?: Maybe<Scalars['String']>;
  pool_gt?: Maybe<Scalars['String']>;
  pool_lt?: Maybe<Scalars['String']>;
  pool_gte?: Maybe<Scalars['String']>;
  pool_lte?: Maybe<Scalars['String']>;
  pool_in?: Maybe<Array<Scalars['String']>>;
  pool_not_in?: Maybe<Array<Scalars['String']>>;
  pool_contains?: Maybe<Scalars['String']>;
  pool_not_contains?: Maybe<Scalars['String']>;
  pool_starts_with?: Maybe<Scalars['String']>;
  pool_not_starts_with?: Maybe<Scalars['String']>;
  pool_ends_with?: Maybe<Scalars['String']>;
  pool_not_ends_with?: Maybe<Scalars['String']>;
  amounts?: Maybe<Array<Scalars['BigDecimal']>>;
  amounts_not?: Maybe<Array<Scalars['BigDecimal']>>;
  amounts_contains?: Maybe<Array<Scalars['BigDecimal']>>;
  amounts_not_contains?: Maybe<Array<Scalars['BigDecimal']>>;
  totalShares?: Maybe<Scalars['BigDecimal']>;
  totalShares_not?: Maybe<Scalars['BigDecimal']>;
  totalShares_gt?: Maybe<Scalars['BigDecimal']>;
  totalShares_lt?: Maybe<Scalars['BigDecimal']>;
  totalShares_gte?: Maybe<Scalars['BigDecimal']>;
  totalShares_lte?: Maybe<Scalars['BigDecimal']>;
  totalShares_in?: Maybe<Array<Scalars['BigDecimal']>>;
  totalShares_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  swapVolume?: Maybe<Scalars['BigDecimal']>;
  swapVolume_not?: Maybe<Scalars['BigDecimal']>;
  swapVolume_gt?: Maybe<Scalars['BigDecimal']>;
  swapVolume_lt?: Maybe<Scalars['BigDecimal']>;
  swapVolume_gte?: Maybe<Scalars['BigDecimal']>;
  swapVolume_lte?: Maybe<Scalars['BigDecimal']>;
  swapVolume_in?: Maybe<Array<Scalars['BigDecimal']>>;
  swapVolume_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  swapFees?: Maybe<Scalars['BigDecimal']>;
  swapFees_not?: Maybe<Scalars['BigDecimal']>;
  swapFees_gt?: Maybe<Scalars['BigDecimal']>;
  swapFees_lt?: Maybe<Scalars['BigDecimal']>;
  swapFees_gte?: Maybe<Scalars['BigDecimal']>;
  swapFees_lte?: Maybe<Scalars['BigDecimal']>;
  swapFees_in?: Maybe<Array<Scalars['BigDecimal']>>;
  swapFees_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  timestamp?: Maybe<Scalars['Int']>;
  timestamp_not?: Maybe<Scalars['Int']>;
  timestamp_gt?: Maybe<Scalars['Int']>;
  timestamp_lt?: Maybe<Scalars['Int']>;
  timestamp_gte?: Maybe<Scalars['Int']>;
  timestamp_lte?: Maybe<Scalars['Int']>;
  timestamp_in?: Maybe<Array<Scalars['Int']>>;
  timestamp_not_in?: Maybe<Array<Scalars['Int']>>;
};

export enum PoolSnapshot_OrderBy {
  Id = 'id',
  Pool = 'pool',
  Amounts = 'amounts',
  TotalShares = 'totalShares',
  SwapVolume = 'swapVolume',
  SwapFees = 'swapFees',
  Timestamp = 'timestamp'
}

export type PoolToken = {
  __typename?: 'PoolToken';
  id: Scalars['ID'];
  poolId: Pool;
  symbol: Scalars['String'];
  name: Scalars['String'];
  decimals: Scalars['Int'];
  address: Scalars['String'];
  priceRate: Scalars['BigDecimal'];
  balance: Scalars['BigDecimal'];
  invested: Scalars['BigDecimal'];
  investments?: Maybe<Array<Investment>>;
  weight?: Maybe<Scalars['BigDecimal']>;
};


export type PoolTokenInvestmentsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Investment_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Investment_Filter>;
};

export type PoolToken_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  poolId?: Maybe<Scalars['String']>;
  poolId_not?: Maybe<Scalars['String']>;
  poolId_gt?: Maybe<Scalars['String']>;
  poolId_lt?: Maybe<Scalars['String']>;
  poolId_gte?: Maybe<Scalars['String']>;
  poolId_lte?: Maybe<Scalars['String']>;
  poolId_in?: Maybe<Array<Scalars['String']>>;
  poolId_not_in?: Maybe<Array<Scalars['String']>>;
  poolId_contains?: Maybe<Scalars['String']>;
  poolId_not_contains?: Maybe<Scalars['String']>;
  poolId_starts_with?: Maybe<Scalars['String']>;
  poolId_not_starts_with?: Maybe<Scalars['String']>;
  poolId_ends_with?: Maybe<Scalars['String']>;
  poolId_not_ends_with?: Maybe<Scalars['String']>;
  symbol?: Maybe<Scalars['String']>;
  symbol_not?: Maybe<Scalars['String']>;
  symbol_gt?: Maybe<Scalars['String']>;
  symbol_lt?: Maybe<Scalars['String']>;
  symbol_gte?: Maybe<Scalars['String']>;
  symbol_lte?: Maybe<Scalars['String']>;
  symbol_in?: Maybe<Array<Scalars['String']>>;
  symbol_not_in?: Maybe<Array<Scalars['String']>>;
  symbol_contains?: Maybe<Scalars['String']>;
  symbol_not_contains?: Maybe<Scalars['String']>;
  symbol_starts_with?: Maybe<Scalars['String']>;
  symbol_not_starts_with?: Maybe<Scalars['String']>;
  symbol_ends_with?: Maybe<Scalars['String']>;
  symbol_not_ends_with?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_gt?: Maybe<Scalars['String']>;
  name_lt?: Maybe<Scalars['String']>;
  name_gte?: Maybe<Scalars['String']>;
  name_lte?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Scalars['String']>>;
  name_not_in?: Maybe<Array<Scalars['String']>>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  decimals?: Maybe<Scalars['Int']>;
  decimals_not?: Maybe<Scalars['Int']>;
  decimals_gt?: Maybe<Scalars['Int']>;
  decimals_lt?: Maybe<Scalars['Int']>;
  decimals_gte?: Maybe<Scalars['Int']>;
  decimals_lte?: Maybe<Scalars['Int']>;
  decimals_in?: Maybe<Array<Scalars['Int']>>;
  decimals_not_in?: Maybe<Array<Scalars['Int']>>;
  address?: Maybe<Scalars['String']>;
  address_not?: Maybe<Scalars['String']>;
  address_gt?: Maybe<Scalars['String']>;
  address_lt?: Maybe<Scalars['String']>;
  address_gte?: Maybe<Scalars['String']>;
  address_lte?: Maybe<Scalars['String']>;
  address_in?: Maybe<Array<Scalars['String']>>;
  address_not_in?: Maybe<Array<Scalars['String']>>;
  address_contains?: Maybe<Scalars['String']>;
  address_not_contains?: Maybe<Scalars['String']>;
  address_starts_with?: Maybe<Scalars['String']>;
  address_not_starts_with?: Maybe<Scalars['String']>;
  address_ends_with?: Maybe<Scalars['String']>;
  address_not_ends_with?: Maybe<Scalars['String']>;
  priceRate?: Maybe<Scalars['BigDecimal']>;
  priceRate_not?: Maybe<Scalars['BigDecimal']>;
  priceRate_gt?: Maybe<Scalars['BigDecimal']>;
  priceRate_lt?: Maybe<Scalars['BigDecimal']>;
  priceRate_gte?: Maybe<Scalars['BigDecimal']>;
  priceRate_lte?: Maybe<Scalars['BigDecimal']>;
  priceRate_in?: Maybe<Array<Scalars['BigDecimal']>>;
  priceRate_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  balance?: Maybe<Scalars['BigDecimal']>;
  balance_not?: Maybe<Scalars['BigDecimal']>;
  balance_gt?: Maybe<Scalars['BigDecimal']>;
  balance_lt?: Maybe<Scalars['BigDecimal']>;
  balance_gte?: Maybe<Scalars['BigDecimal']>;
  balance_lte?: Maybe<Scalars['BigDecimal']>;
  balance_in?: Maybe<Array<Scalars['BigDecimal']>>;
  balance_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  invested?: Maybe<Scalars['BigDecimal']>;
  invested_not?: Maybe<Scalars['BigDecimal']>;
  invested_gt?: Maybe<Scalars['BigDecimal']>;
  invested_lt?: Maybe<Scalars['BigDecimal']>;
  invested_gte?: Maybe<Scalars['BigDecimal']>;
  invested_lte?: Maybe<Scalars['BigDecimal']>;
  invested_in?: Maybe<Array<Scalars['BigDecimal']>>;
  invested_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  weight?: Maybe<Scalars['BigDecimal']>;
  weight_not?: Maybe<Scalars['BigDecimal']>;
  weight_gt?: Maybe<Scalars['BigDecimal']>;
  weight_lt?: Maybe<Scalars['BigDecimal']>;
  weight_gte?: Maybe<Scalars['BigDecimal']>;
  weight_lte?: Maybe<Scalars['BigDecimal']>;
  weight_in?: Maybe<Array<Scalars['BigDecimal']>>;
  weight_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
};

export enum PoolToken_OrderBy {
  Id = 'id',
  PoolId = 'poolId',
  Symbol = 'symbol',
  Name = 'name',
  Decimals = 'decimals',
  Address = 'address',
  PriceRate = 'priceRate',
  Balance = 'balance',
  Invested = 'invested',
  Investments = 'investments',
  Weight = 'weight'
}

export type Pool_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  address?: Maybe<Scalars['Bytes']>;
  address_not?: Maybe<Scalars['Bytes']>;
  address_in?: Maybe<Array<Scalars['Bytes']>>;
  address_not_in?: Maybe<Array<Scalars['Bytes']>>;
  address_contains?: Maybe<Scalars['Bytes']>;
  address_not_contains?: Maybe<Scalars['Bytes']>;
  poolType?: Maybe<Scalars['String']>;
  poolType_not?: Maybe<Scalars['String']>;
  poolType_gt?: Maybe<Scalars['String']>;
  poolType_lt?: Maybe<Scalars['String']>;
  poolType_gte?: Maybe<Scalars['String']>;
  poolType_lte?: Maybe<Scalars['String']>;
  poolType_in?: Maybe<Array<Scalars['String']>>;
  poolType_not_in?: Maybe<Array<Scalars['String']>>;
  poolType_contains?: Maybe<Scalars['String']>;
  poolType_not_contains?: Maybe<Scalars['String']>;
  poolType_starts_with?: Maybe<Scalars['String']>;
  poolType_not_starts_with?: Maybe<Scalars['String']>;
  poolType_ends_with?: Maybe<Scalars['String']>;
  poolType_not_ends_with?: Maybe<Scalars['String']>;
  factory?: Maybe<Scalars['Bytes']>;
  factory_not?: Maybe<Scalars['Bytes']>;
  factory_in?: Maybe<Array<Scalars['Bytes']>>;
  factory_not_in?: Maybe<Array<Scalars['Bytes']>>;
  factory_contains?: Maybe<Scalars['Bytes']>;
  factory_not_contains?: Maybe<Scalars['Bytes']>;
  strategyType?: Maybe<Scalars['Int']>;
  strategyType_not?: Maybe<Scalars['Int']>;
  strategyType_gt?: Maybe<Scalars['Int']>;
  strategyType_lt?: Maybe<Scalars['Int']>;
  strategyType_gte?: Maybe<Scalars['Int']>;
  strategyType_lte?: Maybe<Scalars['Int']>;
  strategyType_in?: Maybe<Array<Scalars['Int']>>;
  strategyType_not_in?: Maybe<Array<Scalars['Int']>>;
  symbol?: Maybe<Scalars['String']>;
  symbol_not?: Maybe<Scalars['String']>;
  symbol_gt?: Maybe<Scalars['String']>;
  symbol_lt?: Maybe<Scalars['String']>;
  symbol_gte?: Maybe<Scalars['String']>;
  symbol_lte?: Maybe<Scalars['String']>;
  symbol_in?: Maybe<Array<Scalars['String']>>;
  symbol_not_in?: Maybe<Array<Scalars['String']>>;
  symbol_contains?: Maybe<Scalars['String']>;
  symbol_not_contains?: Maybe<Scalars['String']>;
  symbol_starts_with?: Maybe<Scalars['String']>;
  symbol_not_starts_with?: Maybe<Scalars['String']>;
  symbol_ends_with?: Maybe<Scalars['String']>;
  symbol_not_ends_with?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_gt?: Maybe<Scalars['String']>;
  name_lt?: Maybe<Scalars['String']>;
  name_gte?: Maybe<Scalars['String']>;
  name_lte?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Scalars['String']>>;
  name_not_in?: Maybe<Array<Scalars['String']>>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  swapEnabled?: Maybe<Scalars['Boolean']>;
  swapEnabled_not?: Maybe<Scalars['Boolean']>;
  swapEnabled_in?: Maybe<Array<Scalars['Boolean']>>;
  swapEnabled_not_in?: Maybe<Array<Scalars['Boolean']>>;
  swapFee?: Maybe<Scalars['BigDecimal']>;
  swapFee_not?: Maybe<Scalars['BigDecimal']>;
  swapFee_gt?: Maybe<Scalars['BigDecimal']>;
  swapFee_lt?: Maybe<Scalars['BigDecimal']>;
  swapFee_gte?: Maybe<Scalars['BigDecimal']>;
  swapFee_lte?: Maybe<Scalars['BigDecimal']>;
  swapFee_in?: Maybe<Array<Scalars['BigDecimal']>>;
  swapFee_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  owner?: Maybe<Scalars['Bytes']>;
  owner_not?: Maybe<Scalars['Bytes']>;
  owner_in?: Maybe<Array<Scalars['Bytes']>>;
  owner_not_in?: Maybe<Array<Scalars['Bytes']>>;
  owner_contains?: Maybe<Scalars['Bytes']>;
  owner_not_contains?: Maybe<Scalars['Bytes']>;
  totalWeight?: Maybe<Scalars['BigDecimal']>;
  totalWeight_not?: Maybe<Scalars['BigDecimal']>;
  totalWeight_gt?: Maybe<Scalars['BigDecimal']>;
  totalWeight_lt?: Maybe<Scalars['BigDecimal']>;
  totalWeight_gte?: Maybe<Scalars['BigDecimal']>;
  totalWeight_lte?: Maybe<Scalars['BigDecimal']>;
  totalWeight_in?: Maybe<Array<Scalars['BigDecimal']>>;
  totalWeight_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  totalSwapVolume?: Maybe<Scalars['BigDecimal']>;
  totalSwapVolume_not?: Maybe<Scalars['BigDecimal']>;
  totalSwapVolume_gt?: Maybe<Scalars['BigDecimal']>;
  totalSwapVolume_lt?: Maybe<Scalars['BigDecimal']>;
  totalSwapVolume_gte?: Maybe<Scalars['BigDecimal']>;
  totalSwapVolume_lte?: Maybe<Scalars['BigDecimal']>;
  totalSwapVolume_in?: Maybe<Array<Scalars['BigDecimal']>>;
  totalSwapVolume_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  totalSwapFee?: Maybe<Scalars['BigDecimal']>;
  totalSwapFee_not?: Maybe<Scalars['BigDecimal']>;
  totalSwapFee_gt?: Maybe<Scalars['BigDecimal']>;
  totalSwapFee_lt?: Maybe<Scalars['BigDecimal']>;
  totalSwapFee_gte?: Maybe<Scalars['BigDecimal']>;
  totalSwapFee_lte?: Maybe<Scalars['BigDecimal']>;
  totalSwapFee_in?: Maybe<Array<Scalars['BigDecimal']>>;
  totalSwapFee_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  totalLiquidity?: Maybe<Scalars['BigDecimal']>;
  totalLiquidity_not?: Maybe<Scalars['BigDecimal']>;
  totalLiquidity_gt?: Maybe<Scalars['BigDecimal']>;
  totalLiquidity_lt?: Maybe<Scalars['BigDecimal']>;
  totalLiquidity_gte?: Maybe<Scalars['BigDecimal']>;
  totalLiquidity_lte?: Maybe<Scalars['BigDecimal']>;
  totalLiquidity_in?: Maybe<Array<Scalars['BigDecimal']>>;
  totalLiquidity_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  totalShares?: Maybe<Scalars['BigDecimal']>;
  totalShares_not?: Maybe<Scalars['BigDecimal']>;
  totalShares_gt?: Maybe<Scalars['BigDecimal']>;
  totalShares_lt?: Maybe<Scalars['BigDecimal']>;
  totalShares_gte?: Maybe<Scalars['BigDecimal']>;
  totalShares_lte?: Maybe<Scalars['BigDecimal']>;
  totalShares_in?: Maybe<Array<Scalars['BigDecimal']>>;
  totalShares_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  createTime?: Maybe<Scalars['Int']>;
  createTime_not?: Maybe<Scalars['Int']>;
  createTime_gt?: Maybe<Scalars['Int']>;
  createTime_lt?: Maybe<Scalars['Int']>;
  createTime_gte?: Maybe<Scalars['Int']>;
  createTime_lte?: Maybe<Scalars['Int']>;
  createTime_in?: Maybe<Array<Scalars['Int']>>;
  createTime_not_in?: Maybe<Array<Scalars['Int']>>;
  swapsCount?: Maybe<Scalars['BigInt']>;
  swapsCount_not?: Maybe<Scalars['BigInt']>;
  swapsCount_gt?: Maybe<Scalars['BigInt']>;
  swapsCount_lt?: Maybe<Scalars['BigInt']>;
  swapsCount_gte?: Maybe<Scalars['BigInt']>;
  swapsCount_lte?: Maybe<Scalars['BigInt']>;
  swapsCount_in?: Maybe<Array<Scalars['BigInt']>>;
  swapsCount_not_in?: Maybe<Array<Scalars['BigInt']>>;
  holdersCount?: Maybe<Scalars['BigInt']>;
  holdersCount_not?: Maybe<Scalars['BigInt']>;
  holdersCount_gt?: Maybe<Scalars['BigInt']>;
  holdersCount_lt?: Maybe<Scalars['BigInt']>;
  holdersCount_gte?: Maybe<Scalars['BigInt']>;
  holdersCount_lte?: Maybe<Scalars['BigInt']>;
  holdersCount_in?: Maybe<Array<Scalars['BigInt']>>;
  holdersCount_not_in?: Maybe<Array<Scalars['BigInt']>>;
  vaultID?: Maybe<Scalars['String']>;
  vaultID_not?: Maybe<Scalars['String']>;
  vaultID_gt?: Maybe<Scalars['String']>;
  vaultID_lt?: Maybe<Scalars['String']>;
  vaultID_gte?: Maybe<Scalars['String']>;
  vaultID_lte?: Maybe<Scalars['String']>;
  vaultID_in?: Maybe<Array<Scalars['String']>>;
  vaultID_not_in?: Maybe<Array<Scalars['String']>>;
  vaultID_contains?: Maybe<Scalars['String']>;
  vaultID_not_contains?: Maybe<Scalars['String']>;
  vaultID_starts_with?: Maybe<Scalars['String']>;
  vaultID_not_starts_with?: Maybe<Scalars['String']>;
  vaultID_ends_with?: Maybe<Scalars['String']>;
  vaultID_not_ends_with?: Maybe<Scalars['String']>;
  tx?: Maybe<Scalars['Bytes']>;
  tx_not?: Maybe<Scalars['Bytes']>;
  tx_in?: Maybe<Array<Scalars['Bytes']>>;
  tx_not_in?: Maybe<Array<Scalars['Bytes']>>;
  tx_contains?: Maybe<Scalars['Bytes']>;
  tx_not_contains?: Maybe<Scalars['Bytes']>;
  tokensList?: Maybe<Array<Scalars['Bytes']>>;
  tokensList_not?: Maybe<Array<Scalars['Bytes']>>;
  tokensList_contains?: Maybe<Array<Scalars['Bytes']>>;
  tokensList_not_contains?: Maybe<Array<Scalars['Bytes']>>;
  amp?: Maybe<Scalars['BigInt']>;
  amp_not?: Maybe<Scalars['BigInt']>;
  amp_gt?: Maybe<Scalars['BigInt']>;
  amp_lt?: Maybe<Scalars['BigInt']>;
  amp_gte?: Maybe<Scalars['BigInt']>;
  amp_lte?: Maybe<Scalars['BigInt']>;
  amp_in?: Maybe<Array<Scalars['BigInt']>>;
  amp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  principalToken?: Maybe<Scalars['Bytes']>;
  principalToken_not?: Maybe<Scalars['Bytes']>;
  principalToken_in?: Maybe<Array<Scalars['Bytes']>>;
  principalToken_not_in?: Maybe<Array<Scalars['Bytes']>>;
  principalToken_contains?: Maybe<Scalars['Bytes']>;
  principalToken_not_contains?: Maybe<Scalars['Bytes']>;
  baseToken?: Maybe<Scalars['Bytes']>;
  baseToken_not?: Maybe<Scalars['Bytes']>;
  baseToken_in?: Maybe<Array<Scalars['Bytes']>>;
  baseToken_not_in?: Maybe<Array<Scalars['Bytes']>>;
  baseToken_contains?: Maybe<Scalars['Bytes']>;
  baseToken_not_contains?: Maybe<Scalars['Bytes']>;
  expiryTime?: Maybe<Scalars['BigInt']>;
  expiryTime_not?: Maybe<Scalars['BigInt']>;
  expiryTime_gt?: Maybe<Scalars['BigInt']>;
  expiryTime_lt?: Maybe<Scalars['BigInt']>;
  expiryTime_gte?: Maybe<Scalars['BigInt']>;
  expiryTime_lte?: Maybe<Scalars['BigInt']>;
  expiryTime_in?: Maybe<Array<Scalars['BigInt']>>;
  expiryTime_not_in?: Maybe<Array<Scalars['BigInt']>>;
  unitSeconds?: Maybe<Scalars['BigInt']>;
  unitSeconds_not?: Maybe<Scalars['BigInt']>;
  unitSeconds_gt?: Maybe<Scalars['BigInt']>;
  unitSeconds_lt?: Maybe<Scalars['BigInt']>;
  unitSeconds_gte?: Maybe<Scalars['BigInt']>;
  unitSeconds_lte?: Maybe<Scalars['BigInt']>;
  unitSeconds_in?: Maybe<Array<Scalars['BigInt']>>;
  unitSeconds_not_in?: Maybe<Array<Scalars['BigInt']>>;
  managementFee?: Maybe<Scalars['BigDecimal']>;
  managementFee_not?: Maybe<Scalars['BigDecimal']>;
  managementFee_gt?: Maybe<Scalars['BigDecimal']>;
  managementFee_lt?: Maybe<Scalars['BigDecimal']>;
  managementFee_gte?: Maybe<Scalars['BigDecimal']>;
  managementFee_lte?: Maybe<Scalars['BigDecimal']>;
  managementFee_in?: Maybe<Array<Scalars['BigDecimal']>>;
  managementFee_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
};

export enum Pool_OrderBy {
  Id = 'id',
  Address = 'address',
  PoolType = 'poolType',
  Factory = 'factory',
  StrategyType = 'strategyType',
  Symbol = 'symbol',
  Name = 'name',
  SwapEnabled = 'swapEnabled',
  SwapFee = 'swapFee',
  Owner = 'owner',
  TotalWeight = 'totalWeight',
  TotalSwapVolume = 'totalSwapVolume',
  TotalSwapFee = 'totalSwapFee',
  TotalLiquidity = 'totalLiquidity',
  TotalShares = 'totalShares',
  CreateTime = 'createTime',
  SwapsCount = 'swapsCount',
  HoldersCount = 'holdersCount',
  VaultId = 'vaultID',
  Tx = 'tx',
  TokensList = 'tokensList',
  Tokens = 'tokens',
  Swaps = 'swaps',
  Shares = 'shares',
  HistoricalValues = 'historicalValues',
  WeightUpdates = 'weightUpdates',
  Amp = 'amp',
  PriceRateProviders = 'priceRateProviders',
  PrincipalToken = 'principalToken',
  BaseToken = 'baseToken',
  ExpiryTime = 'expiryTime',
  UnitSeconds = 'unitSeconds',
  ManagementFee = 'managementFee'
}

export type PriceRateProvider = {
  __typename?: 'PriceRateProvider';
  id: Scalars['ID'];
  poolId: Pool;
  token: PoolToken;
  address: Scalars['Bytes'];
  rate: Scalars['BigDecimal'];
  lastCached: Scalars['Int'];
  cacheDuration: Scalars['Int'];
  cacheExpiry: Scalars['Int'];
};

export type PriceRateProvider_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  poolId?: Maybe<Scalars['String']>;
  poolId_not?: Maybe<Scalars['String']>;
  poolId_gt?: Maybe<Scalars['String']>;
  poolId_lt?: Maybe<Scalars['String']>;
  poolId_gte?: Maybe<Scalars['String']>;
  poolId_lte?: Maybe<Scalars['String']>;
  poolId_in?: Maybe<Array<Scalars['String']>>;
  poolId_not_in?: Maybe<Array<Scalars['String']>>;
  poolId_contains?: Maybe<Scalars['String']>;
  poolId_not_contains?: Maybe<Scalars['String']>;
  poolId_starts_with?: Maybe<Scalars['String']>;
  poolId_not_starts_with?: Maybe<Scalars['String']>;
  poolId_ends_with?: Maybe<Scalars['String']>;
  poolId_not_ends_with?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  token_not?: Maybe<Scalars['String']>;
  token_gt?: Maybe<Scalars['String']>;
  token_lt?: Maybe<Scalars['String']>;
  token_gte?: Maybe<Scalars['String']>;
  token_lte?: Maybe<Scalars['String']>;
  token_in?: Maybe<Array<Scalars['String']>>;
  token_not_in?: Maybe<Array<Scalars['String']>>;
  token_contains?: Maybe<Scalars['String']>;
  token_not_contains?: Maybe<Scalars['String']>;
  token_starts_with?: Maybe<Scalars['String']>;
  token_not_starts_with?: Maybe<Scalars['String']>;
  token_ends_with?: Maybe<Scalars['String']>;
  token_not_ends_with?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['Bytes']>;
  address_not?: Maybe<Scalars['Bytes']>;
  address_in?: Maybe<Array<Scalars['Bytes']>>;
  address_not_in?: Maybe<Array<Scalars['Bytes']>>;
  address_contains?: Maybe<Scalars['Bytes']>;
  address_not_contains?: Maybe<Scalars['Bytes']>;
  rate?: Maybe<Scalars['BigDecimal']>;
  rate_not?: Maybe<Scalars['BigDecimal']>;
  rate_gt?: Maybe<Scalars['BigDecimal']>;
  rate_lt?: Maybe<Scalars['BigDecimal']>;
  rate_gte?: Maybe<Scalars['BigDecimal']>;
  rate_lte?: Maybe<Scalars['BigDecimal']>;
  rate_in?: Maybe<Array<Scalars['BigDecimal']>>;
  rate_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  lastCached?: Maybe<Scalars['Int']>;
  lastCached_not?: Maybe<Scalars['Int']>;
  lastCached_gt?: Maybe<Scalars['Int']>;
  lastCached_lt?: Maybe<Scalars['Int']>;
  lastCached_gte?: Maybe<Scalars['Int']>;
  lastCached_lte?: Maybe<Scalars['Int']>;
  lastCached_in?: Maybe<Array<Scalars['Int']>>;
  lastCached_not_in?: Maybe<Array<Scalars['Int']>>;
  cacheDuration?: Maybe<Scalars['Int']>;
  cacheDuration_not?: Maybe<Scalars['Int']>;
  cacheDuration_gt?: Maybe<Scalars['Int']>;
  cacheDuration_lt?: Maybe<Scalars['Int']>;
  cacheDuration_gte?: Maybe<Scalars['Int']>;
  cacheDuration_lte?: Maybe<Scalars['Int']>;
  cacheDuration_in?: Maybe<Array<Scalars['Int']>>;
  cacheDuration_not_in?: Maybe<Array<Scalars['Int']>>;
  cacheExpiry?: Maybe<Scalars['Int']>;
  cacheExpiry_not?: Maybe<Scalars['Int']>;
  cacheExpiry_gt?: Maybe<Scalars['Int']>;
  cacheExpiry_lt?: Maybe<Scalars['Int']>;
  cacheExpiry_gte?: Maybe<Scalars['Int']>;
  cacheExpiry_lte?: Maybe<Scalars['Int']>;
  cacheExpiry_in?: Maybe<Array<Scalars['Int']>>;
  cacheExpiry_not_in?: Maybe<Array<Scalars['Int']>>;
};

export enum PriceRateProvider_OrderBy {
  Id = 'id',
  PoolId = 'poolId',
  Token = 'token',
  Address = 'address',
  Rate = 'rate',
  LastCached = 'lastCached',
  CacheDuration = 'cacheDuration',
  CacheExpiry = 'cacheExpiry'
}

export type Query = {
  __typename?: 'Query';
  balancer?: Maybe<Balancer>;
  balancers: Array<Balancer>;
  pool?: Maybe<Pool>;
  pools: Array<Pool>;
  poolToken?: Maybe<PoolToken>;
  poolTokens: Array<PoolToken>;
  priceRateProvider?: Maybe<PriceRateProvider>;
  priceRateProviders: Array<PriceRateProvider>;
  poolShare?: Maybe<PoolShare>;
  poolShares: Array<PoolShare>;
  user?: Maybe<User>;
  users: Array<User>;
  userInternalBalance?: Maybe<UserInternalBalance>;
  userInternalBalances: Array<UserInternalBalance>;
  gradualWeightUpdate?: Maybe<GradualWeightUpdate>;
  gradualWeightUpdates: Array<GradualWeightUpdate>;
  swap?: Maybe<Swap>;
  swaps: Array<Swap>;
  joinExit?: Maybe<JoinExit>;
  joinExits: Array<JoinExit>;
  latestPrice?: Maybe<LatestPrice>;
  latestPrices: Array<LatestPrice>;
  poolHistoricalLiquidity?: Maybe<PoolHistoricalLiquidity>;
  poolHistoricalLiquidities: Array<PoolHistoricalLiquidity>;
  tokenPrice?: Maybe<TokenPrice>;
  tokenPrices: Array<TokenPrice>;
  investment?: Maybe<Investment>;
  investments: Array<Investment>;
  poolSnapshot?: Maybe<PoolSnapshot>;
  poolSnapshots: Array<PoolSnapshot>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type QueryBalancerArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryBalancersArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Balancer_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Balancer_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryPoolArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryPoolsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Pool_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Pool_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryPoolTokenArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryPoolTokensArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PoolToken_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<PoolToken_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryPriceRateProviderArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryPriceRateProvidersArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PriceRateProvider_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<PriceRateProvider_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryPoolShareArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryPoolSharesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PoolShare_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<PoolShare_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryUsersArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<User_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<User_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryUserInternalBalanceArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryUserInternalBalancesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<UserInternalBalance_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<UserInternalBalance_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryGradualWeightUpdateArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryGradualWeightUpdatesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<GradualWeightUpdate_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<GradualWeightUpdate_Filter>;
  block?: Maybe<Block_Height>;
};


export type QuerySwapArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QuerySwapsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Swap_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Swap_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryJoinExitArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryJoinExitsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<JoinExit_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<JoinExit_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryLatestPriceArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryLatestPricesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<LatestPrice_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<LatestPrice_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryPoolHistoricalLiquidityArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryPoolHistoricalLiquiditiesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PoolHistoricalLiquidity_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<PoolHistoricalLiquidity_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryTokenPriceArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryTokenPricesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<TokenPrice_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<TokenPrice_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryInvestmentArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryInvestmentsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Investment_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Investment_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryPoolSnapshotArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryPoolSnapshotsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PoolSnapshot_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<PoolSnapshot_Filter>;
  block?: Maybe<Block_Height>;
};


export type Query_MetaArgs = {
  block?: Maybe<Block_Height>;
};

export type Subscription = {
  __typename?: 'Subscription';
  balancer?: Maybe<Balancer>;
  balancers: Array<Balancer>;
  pool?: Maybe<Pool>;
  pools: Array<Pool>;
  poolToken?: Maybe<PoolToken>;
  poolTokens: Array<PoolToken>;
  priceRateProvider?: Maybe<PriceRateProvider>;
  priceRateProviders: Array<PriceRateProvider>;
  poolShare?: Maybe<PoolShare>;
  poolShares: Array<PoolShare>;
  user?: Maybe<User>;
  users: Array<User>;
  userInternalBalance?: Maybe<UserInternalBalance>;
  userInternalBalances: Array<UserInternalBalance>;
  gradualWeightUpdate?: Maybe<GradualWeightUpdate>;
  gradualWeightUpdates: Array<GradualWeightUpdate>;
  swap?: Maybe<Swap>;
  swaps: Array<Swap>;
  joinExit?: Maybe<JoinExit>;
  joinExits: Array<JoinExit>;
  latestPrice?: Maybe<LatestPrice>;
  latestPrices: Array<LatestPrice>;
  poolHistoricalLiquidity?: Maybe<PoolHistoricalLiquidity>;
  poolHistoricalLiquidities: Array<PoolHistoricalLiquidity>;
  tokenPrice?: Maybe<TokenPrice>;
  tokenPrices: Array<TokenPrice>;
  investment?: Maybe<Investment>;
  investments: Array<Investment>;
  poolSnapshot?: Maybe<PoolSnapshot>;
  poolSnapshots: Array<PoolSnapshot>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type SubscriptionBalancerArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionBalancersArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Balancer_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Balancer_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionPoolArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionPoolsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Pool_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Pool_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionPoolTokenArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionPoolTokensArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PoolToken_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<PoolToken_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionPriceRateProviderArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionPriceRateProvidersArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PriceRateProvider_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<PriceRateProvider_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionPoolShareArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionPoolSharesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PoolShare_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<PoolShare_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionUserArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionUsersArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<User_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<User_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionUserInternalBalanceArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionUserInternalBalancesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<UserInternalBalance_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<UserInternalBalance_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionGradualWeightUpdateArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionGradualWeightUpdatesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<GradualWeightUpdate_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<GradualWeightUpdate_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionSwapArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionSwapsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Swap_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Swap_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionJoinExitArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionJoinExitsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<JoinExit_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<JoinExit_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionLatestPriceArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionLatestPricesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<LatestPrice_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<LatestPrice_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionPoolHistoricalLiquidityArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionPoolHistoricalLiquiditiesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PoolHistoricalLiquidity_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<PoolHistoricalLiquidity_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionTokenPriceArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionTokenPricesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<TokenPrice_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<TokenPrice_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionInvestmentArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionInvestmentsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Investment_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Investment_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionPoolSnapshotArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionPoolSnapshotsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PoolSnapshot_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<PoolSnapshot_Filter>;
  block?: Maybe<Block_Height>;
};


export type Subscription_MetaArgs = {
  block?: Maybe<Block_Height>;
};

export type Swap = {
  __typename?: 'Swap';
  id: Scalars['ID'];
  caller: Scalars['Bytes'];
  tokenIn: Scalars['Bytes'];
  tokenInSym: Scalars['String'];
  tokenOut: Scalars['Bytes'];
  tokenOutSym: Scalars['String'];
  tokenAmountIn: Scalars['BigDecimal'];
  tokenAmountOut: Scalars['BigDecimal'];
  poolId: Pool;
  userAddress: User;
  timestamp: Scalars['Int'];
  tx: Scalars['Bytes'];
  fee: Scalars['BigDecimal'];
};

export type Swap_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  caller?: Maybe<Scalars['Bytes']>;
  caller_not?: Maybe<Scalars['Bytes']>;
  caller_in?: Maybe<Array<Scalars['Bytes']>>;
  caller_not_in?: Maybe<Array<Scalars['Bytes']>>;
  caller_contains?: Maybe<Scalars['Bytes']>;
  caller_not_contains?: Maybe<Scalars['Bytes']>;
  tokenIn?: Maybe<Scalars['Bytes']>;
  tokenIn_not?: Maybe<Scalars['Bytes']>;
  tokenIn_in?: Maybe<Array<Scalars['Bytes']>>;
  tokenIn_not_in?: Maybe<Array<Scalars['Bytes']>>;
  tokenIn_contains?: Maybe<Scalars['Bytes']>;
  tokenIn_not_contains?: Maybe<Scalars['Bytes']>;
  tokenInSym?: Maybe<Scalars['String']>;
  tokenInSym_not?: Maybe<Scalars['String']>;
  tokenInSym_gt?: Maybe<Scalars['String']>;
  tokenInSym_lt?: Maybe<Scalars['String']>;
  tokenInSym_gte?: Maybe<Scalars['String']>;
  tokenInSym_lte?: Maybe<Scalars['String']>;
  tokenInSym_in?: Maybe<Array<Scalars['String']>>;
  tokenInSym_not_in?: Maybe<Array<Scalars['String']>>;
  tokenInSym_contains?: Maybe<Scalars['String']>;
  tokenInSym_not_contains?: Maybe<Scalars['String']>;
  tokenInSym_starts_with?: Maybe<Scalars['String']>;
  tokenInSym_not_starts_with?: Maybe<Scalars['String']>;
  tokenInSym_ends_with?: Maybe<Scalars['String']>;
  tokenInSym_not_ends_with?: Maybe<Scalars['String']>;
  tokenOut?: Maybe<Scalars['Bytes']>;
  tokenOut_not?: Maybe<Scalars['Bytes']>;
  tokenOut_in?: Maybe<Array<Scalars['Bytes']>>;
  tokenOut_not_in?: Maybe<Array<Scalars['Bytes']>>;
  tokenOut_contains?: Maybe<Scalars['Bytes']>;
  tokenOut_not_contains?: Maybe<Scalars['Bytes']>;
  tokenOutSym?: Maybe<Scalars['String']>;
  tokenOutSym_not?: Maybe<Scalars['String']>;
  tokenOutSym_gt?: Maybe<Scalars['String']>;
  tokenOutSym_lt?: Maybe<Scalars['String']>;
  tokenOutSym_gte?: Maybe<Scalars['String']>;
  tokenOutSym_lte?: Maybe<Scalars['String']>;
  tokenOutSym_in?: Maybe<Array<Scalars['String']>>;
  tokenOutSym_not_in?: Maybe<Array<Scalars['String']>>;
  tokenOutSym_contains?: Maybe<Scalars['String']>;
  tokenOutSym_not_contains?: Maybe<Scalars['String']>;
  tokenOutSym_starts_with?: Maybe<Scalars['String']>;
  tokenOutSym_not_starts_with?: Maybe<Scalars['String']>;
  tokenOutSym_ends_with?: Maybe<Scalars['String']>;
  tokenOutSym_not_ends_with?: Maybe<Scalars['String']>;
  tokenAmountIn?: Maybe<Scalars['BigDecimal']>;
  tokenAmountIn_not?: Maybe<Scalars['BigDecimal']>;
  tokenAmountIn_gt?: Maybe<Scalars['BigDecimal']>;
  tokenAmountIn_lt?: Maybe<Scalars['BigDecimal']>;
  tokenAmountIn_gte?: Maybe<Scalars['BigDecimal']>;
  tokenAmountIn_lte?: Maybe<Scalars['BigDecimal']>;
  tokenAmountIn_in?: Maybe<Array<Scalars['BigDecimal']>>;
  tokenAmountIn_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  tokenAmountOut?: Maybe<Scalars['BigDecimal']>;
  tokenAmountOut_not?: Maybe<Scalars['BigDecimal']>;
  tokenAmountOut_gt?: Maybe<Scalars['BigDecimal']>;
  tokenAmountOut_lt?: Maybe<Scalars['BigDecimal']>;
  tokenAmountOut_gte?: Maybe<Scalars['BigDecimal']>;
  tokenAmountOut_lte?: Maybe<Scalars['BigDecimal']>;
  tokenAmountOut_in?: Maybe<Array<Scalars['BigDecimal']>>;
  tokenAmountOut_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  poolId?: Maybe<Scalars['String']>;
  poolId_not?: Maybe<Scalars['String']>;
  poolId_gt?: Maybe<Scalars['String']>;
  poolId_lt?: Maybe<Scalars['String']>;
  poolId_gte?: Maybe<Scalars['String']>;
  poolId_lte?: Maybe<Scalars['String']>;
  poolId_in?: Maybe<Array<Scalars['String']>>;
  poolId_not_in?: Maybe<Array<Scalars['String']>>;
  poolId_contains?: Maybe<Scalars['String']>;
  poolId_not_contains?: Maybe<Scalars['String']>;
  poolId_starts_with?: Maybe<Scalars['String']>;
  poolId_not_starts_with?: Maybe<Scalars['String']>;
  poolId_ends_with?: Maybe<Scalars['String']>;
  poolId_not_ends_with?: Maybe<Scalars['String']>;
  userAddress?: Maybe<Scalars['String']>;
  userAddress_not?: Maybe<Scalars['String']>;
  userAddress_gt?: Maybe<Scalars['String']>;
  userAddress_lt?: Maybe<Scalars['String']>;
  userAddress_gte?: Maybe<Scalars['String']>;
  userAddress_lte?: Maybe<Scalars['String']>;
  userAddress_in?: Maybe<Array<Scalars['String']>>;
  userAddress_not_in?: Maybe<Array<Scalars['String']>>;
  userAddress_contains?: Maybe<Scalars['String']>;
  userAddress_not_contains?: Maybe<Scalars['String']>;
  userAddress_starts_with?: Maybe<Scalars['String']>;
  userAddress_not_starts_with?: Maybe<Scalars['String']>;
  userAddress_ends_with?: Maybe<Scalars['String']>;
  userAddress_not_ends_with?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['Int']>;
  timestamp_not?: Maybe<Scalars['Int']>;
  timestamp_gt?: Maybe<Scalars['Int']>;
  timestamp_lt?: Maybe<Scalars['Int']>;
  timestamp_gte?: Maybe<Scalars['Int']>;
  timestamp_lte?: Maybe<Scalars['Int']>;
  timestamp_in?: Maybe<Array<Scalars['Int']>>;
  timestamp_not_in?: Maybe<Array<Scalars['Int']>>;
  tx?: Maybe<Scalars['Bytes']>;
  tx_not?: Maybe<Scalars['Bytes']>;
  tx_in?: Maybe<Array<Scalars['Bytes']>>;
  tx_not_in?: Maybe<Array<Scalars['Bytes']>>;
  tx_contains?: Maybe<Scalars['Bytes']>;
  tx_not_contains?: Maybe<Scalars['Bytes']>;
  fee?: Maybe<Scalars['BigDecimal']>;
  fee_not?: Maybe<Scalars['BigDecimal']>;
  fee_gt?: Maybe<Scalars['BigDecimal']>;
  fee_lt?: Maybe<Scalars['BigDecimal']>;
  fee_gte?: Maybe<Scalars['BigDecimal']>;
  fee_lte?: Maybe<Scalars['BigDecimal']>;
  fee_in?: Maybe<Array<Scalars['BigDecimal']>>;
  fee_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
};

export enum Swap_OrderBy {
  Id = 'id',
  Caller = 'caller',
  TokenIn = 'tokenIn',
  TokenInSym = 'tokenInSym',
  TokenOut = 'tokenOut',
  TokenOutSym = 'tokenOutSym',
  TokenAmountIn = 'tokenAmountIn',
  TokenAmountOut = 'tokenAmountOut',
  PoolId = 'poolId',
  UserAddress = 'userAddress',
  Timestamp = 'timestamp',
  Tx = 'tx',
  Fee = 'fee'
}

export type TokenPrice = {
  __typename?: 'TokenPrice';
  id: Scalars['ID'];
  poolId: Pool;
  asset: Scalars['Bytes'];
  amount: Scalars['BigDecimal'];
  pricingAsset: Scalars['Bytes'];
  price: Scalars['BigDecimal'];
  block: Scalars['BigInt'];
  timestamp: Scalars['Int'];
};

export type TokenPrice_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  poolId?: Maybe<Scalars['String']>;
  poolId_not?: Maybe<Scalars['String']>;
  poolId_gt?: Maybe<Scalars['String']>;
  poolId_lt?: Maybe<Scalars['String']>;
  poolId_gte?: Maybe<Scalars['String']>;
  poolId_lte?: Maybe<Scalars['String']>;
  poolId_in?: Maybe<Array<Scalars['String']>>;
  poolId_not_in?: Maybe<Array<Scalars['String']>>;
  poolId_contains?: Maybe<Scalars['String']>;
  poolId_not_contains?: Maybe<Scalars['String']>;
  poolId_starts_with?: Maybe<Scalars['String']>;
  poolId_not_starts_with?: Maybe<Scalars['String']>;
  poolId_ends_with?: Maybe<Scalars['String']>;
  poolId_not_ends_with?: Maybe<Scalars['String']>;
  asset?: Maybe<Scalars['Bytes']>;
  asset_not?: Maybe<Scalars['Bytes']>;
  asset_in?: Maybe<Array<Scalars['Bytes']>>;
  asset_not_in?: Maybe<Array<Scalars['Bytes']>>;
  asset_contains?: Maybe<Scalars['Bytes']>;
  asset_not_contains?: Maybe<Scalars['Bytes']>;
  amount?: Maybe<Scalars['BigDecimal']>;
  amount_not?: Maybe<Scalars['BigDecimal']>;
  amount_gt?: Maybe<Scalars['BigDecimal']>;
  amount_lt?: Maybe<Scalars['BigDecimal']>;
  amount_gte?: Maybe<Scalars['BigDecimal']>;
  amount_lte?: Maybe<Scalars['BigDecimal']>;
  amount_in?: Maybe<Array<Scalars['BigDecimal']>>;
  amount_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  pricingAsset?: Maybe<Scalars['Bytes']>;
  pricingAsset_not?: Maybe<Scalars['Bytes']>;
  pricingAsset_in?: Maybe<Array<Scalars['Bytes']>>;
  pricingAsset_not_in?: Maybe<Array<Scalars['Bytes']>>;
  pricingAsset_contains?: Maybe<Scalars['Bytes']>;
  pricingAsset_not_contains?: Maybe<Scalars['Bytes']>;
  price?: Maybe<Scalars['BigDecimal']>;
  price_not?: Maybe<Scalars['BigDecimal']>;
  price_gt?: Maybe<Scalars['BigDecimal']>;
  price_lt?: Maybe<Scalars['BigDecimal']>;
  price_gte?: Maybe<Scalars['BigDecimal']>;
  price_lte?: Maybe<Scalars['BigDecimal']>;
  price_in?: Maybe<Array<Scalars['BigDecimal']>>;
  price_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  block?: Maybe<Scalars['BigInt']>;
  block_not?: Maybe<Scalars['BigInt']>;
  block_gt?: Maybe<Scalars['BigInt']>;
  block_lt?: Maybe<Scalars['BigInt']>;
  block_gte?: Maybe<Scalars['BigInt']>;
  block_lte?: Maybe<Scalars['BigInt']>;
  block_in?: Maybe<Array<Scalars['BigInt']>>;
  block_not_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp?: Maybe<Scalars['Int']>;
  timestamp_not?: Maybe<Scalars['Int']>;
  timestamp_gt?: Maybe<Scalars['Int']>;
  timestamp_lt?: Maybe<Scalars['Int']>;
  timestamp_gte?: Maybe<Scalars['Int']>;
  timestamp_lte?: Maybe<Scalars['Int']>;
  timestamp_in?: Maybe<Array<Scalars['Int']>>;
  timestamp_not_in?: Maybe<Array<Scalars['Int']>>;
};

export enum TokenPrice_OrderBy {
  Id = 'id',
  PoolId = 'poolId',
  Asset = 'asset',
  Amount = 'amount',
  PricingAsset = 'pricingAsset',
  Price = 'price',
  Block = 'block',
  Timestamp = 'timestamp'
}

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  sharesOwned?: Maybe<Array<PoolShare>>;
  swaps?: Maybe<Array<Swap>>;
  userInternalBalances?: Maybe<Array<UserInternalBalance>>;
};


export type UserSharesOwnedArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PoolShare_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<PoolShare_Filter>;
};


export type UserSwapsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Swap_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Swap_Filter>;
};


export type UserUserInternalBalancesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<UserInternalBalance_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<UserInternalBalance_Filter>;
};

export type UserInternalBalance = {
  __typename?: 'UserInternalBalance';
  id: Scalars['ID'];
  userAddress?: Maybe<User>;
  token: Scalars['Bytes'];
  balance: Scalars['BigDecimal'];
};

export type UserInternalBalance_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  userAddress?: Maybe<Scalars['String']>;
  userAddress_not?: Maybe<Scalars['String']>;
  userAddress_gt?: Maybe<Scalars['String']>;
  userAddress_lt?: Maybe<Scalars['String']>;
  userAddress_gte?: Maybe<Scalars['String']>;
  userAddress_lte?: Maybe<Scalars['String']>;
  userAddress_in?: Maybe<Array<Scalars['String']>>;
  userAddress_not_in?: Maybe<Array<Scalars['String']>>;
  userAddress_contains?: Maybe<Scalars['String']>;
  userAddress_not_contains?: Maybe<Scalars['String']>;
  userAddress_starts_with?: Maybe<Scalars['String']>;
  userAddress_not_starts_with?: Maybe<Scalars['String']>;
  userAddress_ends_with?: Maybe<Scalars['String']>;
  userAddress_not_ends_with?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['Bytes']>;
  token_not?: Maybe<Scalars['Bytes']>;
  token_in?: Maybe<Array<Scalars['Bytes']>>;
  token_not_in?: Maybe<Array<Scalars['Bytes']>>;
  token_contains?: Maybe<Scalars['Bytes']>;
  token_not_contains?: Maybe<Scalars['Bytes']>;
  balance?: Maybe<Scalars['BigDecimal']>;
  balance_not?: Maybe<Scalars['BigDecimal']>;
  balance_gt?: Maybe<Scalars['BigDecimal']>;
  balance_lt?: Maybe<Scalars['BigDecimal']>;
  balance_gte?: Maybe<Scalars['BigDecimal']>;
  balance_lte?: Maybe<Scalars['BigDecimal']>;
  balance_in?: Maybe<Array<Scalars['BigDecimal']>>;
  balance_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
};

export enum UserInternalBalance_OrderBy {
  Id = 'id',
  UserAddress = 'userAddress',
  Token = 'token',
  Balance = 'balance'
}

export type User_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
};

export enum User_OrderBy {
  Id = 'id',
  SharesOwned = 'sharesOwned',
  Swaps = 'swaps',
  UserInternalBalances = 'userInternalBalances'
}

export type _Block_ = {
  __typename?: '_Block_';
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']>;
  /** The block number */
  number: Scalars['Int'];
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  __typename?: '_Meta_';
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean'];
};

export enum _SubgraphErrorPolicy_ {
  /** Data will be returned even if the subgraph has indexing errors */
  Allow = 'allow',
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  Deny = 'deny'
}

export type PoolTokensQueryVariables = Exact<{
  filter?: Maybe<PoolToken_Filter>;
}>;


export type PoolTokensQuery = { __typename?: 'Query', poolTokens: Array<{ __typename?: 'PoolToken', address: string }> };

export type SwapsQueryVariables = Exact<{
  filter?: Maybe<Swap_Filter>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
}>;


export type SwapsQuery = { __typename?: 'Query', swaps: Array<{ __typename?: 'Swap', id: string, tokenIn: any, tokenOut: any, tokenAmountIn: any, tokenAmountOut: any, caller: any, tx: any, timestamp: number, poolId: { __typename?: 'Pool', id: string } }> };
