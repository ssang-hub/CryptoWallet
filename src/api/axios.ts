import axios from 'axios';

export const moralisApi = axios.create({
  baseURL: 'https://deep-index.moralis.io/api/v2',
  headers: { 'Content-type': 'application/json', 'X-API-Key': 'V9qaTOLapDGtpQ0dmdJ58dmT72oxzukw8UTr9PH27z9fbDGSYyISDTLAXl95vcUb' },
});
