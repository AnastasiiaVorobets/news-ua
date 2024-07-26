import React, { useState, useEffect } from 'react';
import NewsItem from '../NewsItem/NewsItem';
import { News } from '../../types/news';
import './SavedNews.scss';

interface SavedNewsProps {
  searchQuery: string;
}

const SavedNews: React.FC<SavedNewsProps> = ({ searchQuery }) => {
  const [savedNews, setSavedNews] = useState<News[]>([]);

  useEffect(() => {
    const savedNewsData = JSON.parse(localStorage.getItem('savedNews') || '[]');
    setSavedNews(savedNewsData);
  }, []);

  const filteredSavedNews = savedNews.filter(newsItem =>
    newsItem.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
