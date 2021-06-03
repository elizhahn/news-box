import { React } from "react";
import ArticleCard from '../ArticleCard/ArticleCard';
import './ArticleList.css';

const ArticleList = ({ articles, showDetails, section }) => {
  const articleList = articles.map((article, i) => {
    return <ArticleCard
              key={i}
              id={Date.now()}
              title={article.title}
              publishDate={article.published_date}
              showDetails={showDetails}
           />
  })
  return (
    <main className="article-list-container">
      <h2 className="article-list-section">{`You are now viewing the ${section} section...`}</h2>
      <div className="article-list">
        { articleList }
      </div>
    </main>
  )
}

export default ArticleList