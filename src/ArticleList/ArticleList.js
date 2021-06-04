import { React } from "react";
import ArticleCard from '../ArticleCard/ArticleCard';
import './ArticleList.css';

const ArticleList = ({ articles, showDetails, section, err }) => {
  const articleList = articles.map((article, i) => {
    console.log(article)
    return <ArticleCard
              key={i}
              id={Date.now()}
              img={article.multimedia[2].url}
              title={article.title}
              publishDate={article.published_date}
              showDetails={showDetails}
           />
  })
  return (
    <main className="article-list-container">
      <h2 className="article-list-section" data-cy="section-intro">{`You are now viewing the ${section} section...`}</h2>
      <div className="article-list">
        {!err && !articles.length && <h1 className="err-msg" data-cy="loading-msg">Loading news...</h1>}
        {err && <h1 className="err-msg">Sorry, we're having an issue grabbing today's news..check back later</h1>}
        { articleList }
      </div>
    </main>
  )
}

export default ArticleList