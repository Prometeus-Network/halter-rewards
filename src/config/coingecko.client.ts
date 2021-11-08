import { CoinGeckoClient } from 'coingecko-api-v3';

export const coinGeckoClient = new CoinGeckoClient({
  timeout: 60000,
  autoRetry: true,
});
