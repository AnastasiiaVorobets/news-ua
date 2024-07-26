import { News } from '../types/news';

export const filterNews = (news: News[], query: string): News[] => {
  return news.filter(newsItem =>
    newsItem.title.toLowerCase().includes(query.toLowerCase())
  );
};
