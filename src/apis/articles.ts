import axios from 'axios';

export const articles = axios.create({
  baseURL: 'https://fe-articles-api.herokuapp.com',
});
