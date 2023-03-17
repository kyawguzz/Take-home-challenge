import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.pokemontcg.io/v2/',
  headers: {
    'X-Api-Key': '1a604fb1-afc6-4db8-b1d7-93cd22f16a69',
  },
});

export const searchCards = (params) => {
  return api.get('/cards', { params });
};
