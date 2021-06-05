import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sections.css';

const Sections = ({ findArticles }) => {
  const [chosenSection, setSection] = useState('home')
  const sections = ["arts", "automobiles", "books", "business", "fashion", "food", "health", "home", "insider", "magazine", "movies", "nyregion", "obituaries", "opinion", "politics", "realestate", "science", "sports", "sundayreview", "technology", "theater", "t-magazine", "travel", "upshot", "us", "world"]

  const sectionChoices = sections.map(section => {
    return (
      <label 
        key={section}
        className="sections-label"
        htmlFor={section}
      >
         <input 
            className="sections-input"
            type="radio" 
            id={section} 
            name="section" 
            value={section}
            checked={chosenSection === section}
            onChange={() => setSection(section)}
            data-cy="section-choice"
        />
        {section}</label>
    )
  })
  return (
    <div className="sections-container">
      <div
        className="sections-intro"
      >
        <h2>Select a news article section to explore</h2>
        <Link to='/'>
          <button 
            className="button"
            onClick={() => findArticles(chosenSection)}
            data-cy="sections-btn"
          >
            SHOW ME ARTICLES
          </button>
        </Link>
      </div>
      {sectionChoices}
    </div>
  )
}

export default Sections;