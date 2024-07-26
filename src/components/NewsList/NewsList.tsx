import React, { useEffect, useState } from 'react';
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
      console.log('Fetching news started');
      setIsLoading(true);
      try {
        const newsData = await fetchNews();
        console.log('Fetched news data:', newsData);
        setNews(newsData);
      }
      catch (error) {
        console.error('Error fetching news:', error);
      }
      finally {
        setIsLoading(false);
        console.log('Fetching news finished');
      }
    };

    getNews();
  }, []);

  const filteredNews = news.filter(newsItem =>
    newsItem.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
