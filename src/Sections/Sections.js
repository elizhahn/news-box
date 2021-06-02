import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sections.css';

const Sections = () => {
  const [chosenSection, setSection] = useState('')
  const sections = ["arts", "automobiles", "books", "business", "fashion", "food", "health", "home", "insider", "magazine", "movies", "nyregion", "obituaries", "opinion", "politics", "realestate", "science", "sports", "sundayreview", "technology", "theater", "t-magazine", "travel", "upshot", "us", "world"]

  const sectionChoices = sections.map(section => {
    return (
      <>
      <label 
        className="sections-label"
        for={section}
      >
         <input 
            className="sections-input"
            key={section}
            type="radio" 
            id={section} 
            name="section" 
            value={section}
            checked={chosenSection === section}
            onChange={() => setSection(section)}
        />
        {section}</label>
      </>
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