import React, { useEffect, useState, useMemo } from 'react';
import NewsItem from '../NewsItem/NewsItem';
import { News } from '../../types/news';
import { filterNews } from '../../utils/filterNews';
import './SavedNews.scss';

interface SavedNewsProps {
  searchQuery: string;
}

const SavedNews: React.FC<SavedNewsProps> = ({ searchQuery }) => {
  const [savedNews, setSavedNews] = useState<News[]>([]);

  useEffect(() => {
    const savedNewsData = localStorage.getItem('savedNews');
    if (savedNewsData) {
      setSavedNews(JSON.parse(savedNewsData));
    }
  }, []);

  const filteredSavedNews = useMemo(() => filterNews(savedNews, searchQuery), [savedNews, searchQuery]);

  return (
    <div className="saved-news">
      {filteredSavedNews.length > 0 ? (
        filteredSavedNews.map(newsItem => (
          <NewsItem key={newsItem.url} newsItem={newsItem} />
        ))
      ) : (
        <p className="no-saved-news">No saved news articles found.</p>
      )}
    </div>
  );
};

export default SavedNews;
