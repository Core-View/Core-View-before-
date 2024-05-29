import React from 'react';
import logo from '../assets/CoreView_logo_white.png';
// npm install react-router-dom
import { Link } from 'react-router-dom';
import './header.css';

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="Logo" className="header-logo" />
      </Link>
      <nav className="header-nav">
        <ul>
          <li><Link to="/home_main">home_main</Link></li>
          <li><Link to="/my_main">my_main</Link></li>
          <li><Link to="/post_main">post_main</Link></li>
          <li><Link to="/signin_main">signin_main</Link></li>
          <li><Link to="/editor">editor</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;