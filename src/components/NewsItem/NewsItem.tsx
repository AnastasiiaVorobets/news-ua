import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import NewsImage from '../NewsImage/NewsImage';
import BookmarkButton from '../BookmarkButton/BookmarkButton';
import { News } from '../../types/news';
import './NewsItem.scss';
import { formatDate } from '../../utils/formattedDate';

interface NewsItemProps {
  newsItem: News;
  onDelete?: (url: string) => void;
}

const NewsItem: React.FC<NewsItemProps> = ({ newsItem }) => {
  const { urlToImage, url, title, description, publishedAt } = newsItem;
  const formattedDate = formatDate(publishedAt);

  return (
    <div className="news-item">
      <div className="news-content">
        <div className="news-info">
          <div>
            <h3 onClick={() => window.open(url, '_blank')}>{title}</h3>
            <p>{description}</p>
            <p>{formattedDate}</p>
          </div>
          <NewsImage url={urlToImage} />
        </div>
        <div className="news-actions">
          <BookmarkButton newsItem={newsItem} />
          <button
            className="open-news-button"
            onClick={() => window.open(url, '_blank')}
          >
            <FaExternalLinkAlt />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
