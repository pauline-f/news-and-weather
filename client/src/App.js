import React, { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './Header/Header';
import Home from './Home/Home';
import News from './News/News';
import Settings from './Settings/Settings';

if (!localStorage.getItem('country')) {
  localStorage.setItem('country', 'se');
}

const c = localStorage.getItem('country');

function App() {
  const [country, setCountry] = useState(c);
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Route exact path='/' component={Home} />
        <Route path='/news' render={(props) => <News {...props} country={country} component={News} />} />
        <Route path='/settings' render={(props) => <Settings {...props} country={country} setCountry={setCountry} component={Settings} />} />
      </div>

    </BrowserRouter>
  );
}

export default App;