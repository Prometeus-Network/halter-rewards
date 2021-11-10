import { AppConfig, Network } from './types';
import testnet from './testnet.json';

export const network: Network = (process.env.NETWORK as Network) ?? 'testnet';

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
  jwt: {
    secret: process.env.JWT_SECRET,
  },
  privateKey:
    process.env.PRIVATE_KEY ??
    'c63dc1f35f1fbedb765505be804d9b18bcd9ff8bb8ffde1d753537d5b18b9276',
};
