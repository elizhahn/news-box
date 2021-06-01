import React from 'react';

const ArticleCard = ({ title, publishDate, expanded }) => {
  return (
    <article className="card">
      <h2 className="card-title">{ title }</h2>
      <time>{ publishDate }</time>
      <div className="expanded-card">
        <button>EXPLORE MORE</button>
      </div>
    </article>
  )
}

export default ArticleCard; 