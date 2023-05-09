import axios from 'axios';

export const moralisApi = axios.create({
  baseURL: 'https://deep-index.moralis.io/api/v2',
  headers: { 'Content-type': 'application/json', 'X-API-Key': 'W4ubcHBhAa9H7ooLlAsuqlvFQzaAdNdhTsOf7P90OLEdwR7gXcjW7EJr4DApLbIb' },
});
