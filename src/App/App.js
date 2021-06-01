import './App.css';
import ArticleList from '../ArticleList/ArticleList';
import { useState } from 'react';

const App = () => {
  const [section, setSection] = useState('')
  const [articles, setArticles] = useState([])
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="App">
      <header className="App-header">
      
      </header>
      <ArticleList/>
    </div>
  );
}

export default App;
