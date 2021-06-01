import './App.css';
import ArticleList from '../ArticleList/ArticleList';
import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

const App = () => {
  const [section, setSection] = useState('');
  const [articles, setArticles] = useState([]);
  const [expanded, setExpanded] = useState(false);
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

  return (
    <div className="App">
      <header className="App-header">
        <h1>Fresh News Box</h1>
      </header>
      <Switch>
        <Route to="/">
          <ArticleList
            articles={articles}
          />
        </Route> 
      </Switch>
      
    </div>
  );
}

export default App;
