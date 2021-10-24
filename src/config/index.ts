import { AppConfig, Network } from './types';
import testnet from './testnet.json';

const network: Network = (process.env.NETWORK as Network) ?? 'testnet';

const configs: Record<Network, AppConfig> = {
  testnet: testnet as unknown as AppConfig,
};
export const config: AppConfig = {
  ...configs[network],
  mocksEnabled: process.env.NODE_ENV === 'test',
  mongodbURL: process.env.MONGODB_URL,
  port: process.env.PORT || '5000',
  fleek: {
    key: process.env.FLEEK_API_KEY || '',
    secret: process.env.FLEEK_API_SECRET || '',
  },
};
