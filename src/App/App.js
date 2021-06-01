import './App.css';
import ArticleList from '../ArticleList/ArticleList';
import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

const App = () => {
  const [section, setSection] = useState('')
  const [articles, setArticles] = useState([])
  const [expanded, setExpanded] = useState(false)

  useEffect(()=> {
    console.log("component did  mount")
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Fresh News Box</h1>
      </header>
      <Switch>
        <Route to="/">
          <ArticleList/>
        </Route> 
      </Switch>
      
    </div>
  );
}

export default App;
