import React, { useState, useEffect, useCallback } from 'react';
import { FaBookmark, FaRegBookmark } from 'react-icons/fa';
import { News } from '../../types/news';
import './BookmarkButton.scss';

interface BookmarkButtonProps {
  newsItem: News;
}

const BookmarkButton: React.FC<BookmarkButtonProps> = ({ newsItem }) => {
  const [isSaved, setIsSaved] = useState(false);
  const [savedNews, setSavedNews] = useState<News[]>([]);

  useEffect(() => {
    const storedNews = localStorage.getItem('savedNews');
    if (storedNews) {
      const parsedNews = JSON.parse(storedNews) as News[];
      setSavedNews(parsedNews);
      const newsExists = parsedNews.some(savedItem => savedItem.url === newsItem.url);
      setIsSaved(newsExists);
    }
  }, [newsItem]);

  const handleToggleSave = useCallback(() => {
    let updatedSavedNews: News[];
    if (isSaved) {
      updatedSavedNews = savedNews.filter(savedItem => savedItem.url !== newsItem.url);
    }
    else {
      updatedSavedNews = [...savedNews, newsItem];
    }
    setSavedNews(updatedSavedNews);
    localStorage.setItem('savedNews', JSON.stringify(updatedSavedNews));
    setIsSaved(!isSaved);
  }, [isSaved, newsItem, savedNews]);

  return (
    <button
      className={`bookmark-button ${isSaved ? 'saved' : ''}`}
      onClick={handleToggleSave}
    >
      {isSaved ? <FaBookmark /> : <FaRegBookmark />}
    </button>
  );
};

export default BookmarkButton;
