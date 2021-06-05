import React from 'react';
import './ArticleDetails.css';

const ArticleDetails = ({ title, byline, abstract, img, articleLink }) => {

  return (
    <div className="article-details-container" data-cy="details">
      <h2 data-cy="details-title">{title}</h2>
      <p data-cy="details-byline">{byline}</p>
      <p className="article-abstract" data-cy="details-abstract">{abstract}</p>
      <img 
        className="article-img"
        src={img[0].url}
        alt={img[0].caption}
        data-cy="details-img"
      />
      <a 
        className="article-link"
        href={articleLink}
        data-cy="details-link"
      >
        TAKE ME TO THE FULL ARTICLE
      </a>
    </div>
  )
}

export default ArticleDetails;