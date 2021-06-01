import { React } from "react";
import ArticleCard from '../ArticleCard/ArticleCard';

const ArticleList = ({ articles }) => {
  const articleList = articles.map((article, i) => {
    return <ArticleCard
              key={i}
              id={Date.now()}
              title={article.title}
              publishDate={article.published_date}
           />
  })
  return (
    <main>
      { articleList }
    </main>
  )
}

export default ArticleList