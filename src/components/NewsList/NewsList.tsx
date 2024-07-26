import React, { useEffect, useState, useMemo } from 'react';
import { fetchNews } from '../../api/newsApi';
import NewsItem from '../NewsItem/NewsItem';
import { News } from '../../types/news';
import Loading from '../Loading/Loading';
import './NewsList.scss';

interface NewsListProps {
  searchQuery: string;
}

const NewsList: React.FC<NewsListProps> = ({ searchQuery }) => {
  const [news, setNews] = useState<News[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getNews = async () => {
      setIsLoading(true);
      try {
        const newsData: News[] = await fetchNews();
        setNews(newsData);
      } catch (error) {
        console.error('Error fetching news:', error);
      } finally {
        setIsLoading(false);
      }
    };

    getNews();
  }, []);

  const filteredNews = useMemo(() => {
    return news.filter(newsItem =>
      newsItem.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [news, searchQuery]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="news-list">
      {filteredNews.map(newsItem => (
        <NewsItem key={newsItem.url} newsItem={newsItem} />
      ))}
    </div>
  );
};

export default NewsList;
