import React from 'react';
import { BiHomeAlt } from 'react-icons/bi';
import { BiMenu } from 'react-icons/bi';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="nav-bar-mobile">
      <NavLink 
        className="nav-link"
        activeClassName="active" 
        to="/"
      >
        <BiHomeAlt className="nav-icon"/>
      </NavLink>
      <NavLink 
        className="nav-link"
        activeClassName="active" 
        to="/sections"
      >
        <BiMenu className="nav-icon"/>
      </NavLink>
    </nav>
    
     
  )
}

export default NavBar;