import axios from 'axios';

const API_KEY = '42ba9f1870944cbeae875392f7b8887d';
const URL = `https://newsapi.org/v2/top-headlines?country=ua&apiKey=${API_KEY}`;

export const fetchNews = async () => {
  const response = await axios.get(URL);
  return response.data.articles;
};
