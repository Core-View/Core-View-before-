import React from 'react';
import './header.css';

function Header() {
  return (
    <header className="header">
      <h1 className="header-title">Core View</h1>
      <nav className="header-nav">
        <ul>
          <li><a href="#posts">전체 게시글</a></li>
          <li><a href="#rank">기여도 순위</a></li>
          <li><a href="#signin">로그인</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;