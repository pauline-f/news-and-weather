import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <div className="Header">
      <nav>
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/news">News</Link>
        </div>
        <div>
          <Link to="/weather">Weather</Link>
        </div>
        <div>
          <Link to="/settings">Settings</Link>
        </div>
      </nav>
    </div>
  );
}

export default Header;
