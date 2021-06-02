import React from 'react';
import './ArticleDetails.css';

const ArticleDetails = ({ title, byline, abstract, img, articleLink }) => {
  console.log(articleLink)
  return (
    <div className="article-details-container">
      <h2>{title}</h2>
      <p>{byline}</p>
      <p className="article-abstract">{abstract}</p>
      <img 
        className="article-img"
        src={img[0].url}
        alt={img[0].caption}
      />
      <a 
        className="article-link"
        href={articleLink}
      >
        TAKE ME TO THE FULL ARTICLE
      </a>
    </div>
  )
}

export default ArticleDetails;