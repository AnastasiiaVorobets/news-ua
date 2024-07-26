import React from 'react';
import './NewsImage.scss';

interface NewsImageProps {
  url: string | null;
}

const NewsImage: React.FC<NewsImageProps> = ({ url }) => {
  if (!url) {
    return null;
  }

  return (
    <div className="news-image">
      <img src={url} alt="News" />
    </div>
  );
};

export default NewsImage;
