import './App.css';
import ArticleList from '../ArticleList/ArticleList';
import ArticleDetails from '../ArticleDetails/ArticleDetails';
import NavBar from '../NavBar/NavBar';
import Sections from '../Sections/Sections';
import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ReactComponent as NewsPaperImg } from '../assets/noun_Newspaper_3963888.svg';

const App = () => {
  const [section, setSection] = useState('home');
  const [articles, setArticles] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState({})
  const [err, setErr] = useState(''); 

  useEffect(()=> {
    fetch(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${process.env.REACT_APP_API_KEY}`)
    .then(response => response.json())
    .then(articles => {
      console.log(articles)
      setArticles(articles.results)
    })
    .catch(err => {
      setErr(err.message)
    })
  }, [])

  const showDetails = (title) => {
    const selectedArticle = articles.find(article => {
      return article.title === title; 
    });
    console.log(selectedArticle)
    setSelectedArticle(selectedArticle); 
  }

  const findArticles = (section) => {
    fetch(`https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${process.env.REACT_APP_API_KEY}`)
    .then(response => response.json())
    .then(articles => {
      console.log(articles)
      setArticles(articles.results)
      setSection(section)
    })
    .catch(err => {
      setErr(err.message)
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Fresh News Box</h1>
        <NewsPaperImg className="news-icon"/>
        <NavBar
          styleName={"nav-bar-desktop"}
        />
      </header>
      <Switch>
        <Route exact path="/">
          <ArticleList
            err={err}
            articles={articles}
            showDetails={showDetails}
            section={section}
          />
        </Route> 
        <Route exact path="/sections">
          <Sections
            findArticles={findArticles}
          />
        </Route>
        <Route exact path ="/:title">
          <ArticleDetails
            title={selectedArticle.title}
            byline={selectedArticle.byline}
            abstract={selectedArticle.abstract}
            img={selectedArticle.multimedia}
            article={selectedArticle}
            articleLink={selectedArticle.url}
          />
        </Route>
      </Switch>
      <NavBar
        styleName={"nav-bar-mobile"}
      />
    </div>
  );
}

export default App;
