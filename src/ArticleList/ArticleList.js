import { React } from "react";
import ArticleCard from '../ArticleCard/ArticleCard';
import './ArticleList.css';

const ArticleList = ({ articles, showDetails }) => {
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
      { articleList }
    </main>
  )
}

export default ArticleList