import React from 'react';
import './ArticleDetails.css';

const ArticleDetails = ({ title, byline, abstract, img, articleLink }) => {
  console.log(img)
  return (
    <div>
      <h2>{title}</h2>
      <p>{byline}</p>
      <p className="article-abstract">{abstract}</p>
      <img 
        className="article-img"
        src={img[0].url}
      />
      <a src={articleLink}/>
    </div>
  )
}

export default ArticleDetails;