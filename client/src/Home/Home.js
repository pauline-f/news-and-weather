import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';


function Home() {
  return (
    <div className="Home">
      <h1>News and weather</h1>

      <Link className='settingsButton' to="/settings">Go to Settings</Link>
    </div>
  );
}

export default Home;
