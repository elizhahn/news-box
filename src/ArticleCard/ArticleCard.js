import React from 'react';
import './ArticleCard.css';
import { formatDate } from '../utility.js'

const ArticleCard = ({ title, publishDate, expanded }) => {
  const cleanedDate = formatDate(publishDate)
  return (
    <article className="card">
      <h2 className="card-title">{ title }</h2>
      <div className="expanded-card">
        <time className="card-date"><span className="card-date-intro">published:</span> { cleanedDate }</time>
        <button className="button">EXPLORE MORE</button>
      </div>
    </article>
  )
}

export default ArticleCard; 