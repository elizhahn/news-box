import React from 'react';
import './ArticleCard.css';
import { formatDate } from '../utility.js';
import { Link } from 'react-router-dom';

const ArticleCard = ({ title, publishDate, showDetails }) => {
  const cleanedDate = formatDate(publishDate)
  const formatTitle = encodeURIComponent(title)
  return (
    <article className="card">
      <h2 className="card-title">{ title }</h2>
      <div className="expanded-card">
        <time className="card-date"><span className="card-date-intro">published:</span> { cleanedDate }</time>
        <Link to={`/${formatTitle}`}>
          <button 
            className="button"
            onClick={() => showDetails(title)}
          >
              EXPLORE MORE
          </button>
        </Link>
      </div>
    </article>
  )
}

export default ArticleCard; 