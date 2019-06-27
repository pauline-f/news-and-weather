import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <div className="Header">
      <nav>
        <div className='link'>
          <Link to="/">Home</Link>
        </div>
        <div className='link'>
          <Link to="/news">News</Link>
        </div>
        <div className='link'>
          <Link to="/weather">Weather</Link>
        </div>
        <div className='link'>
          <Link to="/settings">Settings</Link>
        </div>
      </nav>
    </div>
  );
}

export default Header;
