import axios from 'axios';

export const moralisApi = axios.create({
  baseURL: 'https://deep-index.moralis.io/api/v2',
  headers: { 'Content-type': 'application/json', 'X-API-Key': 'Gmkxk7hwwZVGse6ckeYu0LyDe0w7QwS8U4CNOyUTIeMBHqDA3pQGqQoFwTRimofY' },
});
