import React, { useState, useEffect } from 'react';
import { FaBookmark, FaRegBookmark } from 'react-icons/fa';
import { News } from '../../types/news';
import './BookmarkButton.scss';

interface BookmarkButtonProps {
  newsItem: News;
}

const BookmarkButton: React.FC<BookmarkButtonProps> = ({ newsItem }) => {
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const savedNews = JSON.parse(localStorage.getItem('savedNews') || '[]') as News[];
    const newsExists = savedNews.some(savedItem => savedItem.url === newsItem.url);
    setIsSaved(newsExists);
  }, [newsItem]);

  const handleToggleSave = () => {
    const savedNews = JSON.parse(localStorage.getItem('savedNews') || '[]') as News[];
    if (isSaved) {
      const updatedSavedNews = savedNews.filter(savedItem => savedItem.url !== newsItem.url);
      localStorage.setItem('savedNews', JSON.stringify(updatedSavedNews));
      setIsSaved(false);
    } else {
      const updatedSavedNews = [...savedNews, newsItem];
      localStorage.setItem('savedNews', JSON.stringify(updatedSavedNews));
      setIsSaved(true);
    }
  };

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
