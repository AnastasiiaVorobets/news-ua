import axios from 'axios';
import { News } from '../types/news';

const API_KEY = '42ba9f1870944cbeae875392f7b8887d';
const URL = `https://newsapi.org/v2/top-headlines?country=ua&apiKey=${API_KEY}`;

export const fetchNews = async (): Promise<News[]> => {
  const response = await axios.get(URL);
  return response.data.articles;
};
