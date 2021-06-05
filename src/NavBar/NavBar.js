import React from 'react';
import { BiHomeAlt } from 'react-icons/bi';
import { FaRegNewspaper } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = ({ styleName }) => {
  return (
    <nav className={styleName} data-cy="nav-bar-mobile">
      <NavLink 
        className="nav-link"
        activeClassName="active"
        data-cy="nav-icon" 
        to="/"
      >
        <BiHomeAlt className="nav-icon"/>
      </NavLink>
      <NavLink 
        className="nav-link"
        activeClassName="active"
        data-cy="nav-icon" 
        to="/sections"
      >
        <FaRegNewspaper className="nav-icon"/>
      </NavLink>
    </nav> 
  )
}

export default NavBar;