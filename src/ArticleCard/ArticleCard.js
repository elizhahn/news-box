import React from 'react';
import './ArticleCard.css';
import { formatDate } from '../utility.js';
import { Link } from 'react-router-dom';

const ArticleCard = ({ title, publishDate, showDetails, img }) => {
  const cleanedDate = formatDate(publishDate)
  const formatTitle = encodeURIComponent(title)
  return (
    <article className="card" data-cy="article-card">
      <div className="card-content-container">
        <img className="card-img" src={img} alt={img.caption} data-cy="card-img"/>
        <div className="card-btn-date-container">
          <Link to={`/${formatTitle}`}>
            <button 
              className="button"
              onClick={() => showDetails(title)}
              data-cy="card-btn"
            >
                EXPLORE MORE
            </button>
          </Link>
          <time className="card-date" data-cy="card-publish-date"><span className="card-date-intro">published:</span> { cleanedDate }</time>
        </div>
      </div>
      <h2 className="card-title" data-cy="card-title">{ title }</h2>
    </article>
  )
}

export default ArticleCard; 