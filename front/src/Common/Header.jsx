import React from "react";
// npm install react-router-dom
import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img src="/images/CoreView_logo_white.png" alt="Logo" className="header-logo" />
      </Link>
      <nav className="header-nav">
        <ul>
          <li>
            <Link to="/">home_main</Link>
          </li>
          <li>
            <Link to="my_main">my_main</Link>
          </li>
          <li>
            <Link to="/post_main">post_main</Link>
          </li>
          <li>
            <Link to="users/sign-in">signin_main</Link>
          </li>
          <li>
            <Link to="post-view">post_view</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
