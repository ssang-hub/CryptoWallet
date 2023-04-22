import axios from 'axios';

// param: is symbol of coin. Example: ETH, BTC, BNB...
const getCoinPrice = async (symbol: string) => {
  const { data } = await axios.get<{ price: string }>('https://api.binance.com/api/v3/ticker/price', { params: { symbol: `${symbol}USDT` } });
  const priceInUsd = Number(data.price);
  return priceInUsd;
};

export { getCoinPrice };
