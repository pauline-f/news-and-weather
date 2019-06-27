import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './Header/Header';
import Home from './Home/Home';
import News from './News/News';
import Settings from './Settings/Settings';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        Hello App
      <Header />
        <Route exact path='/' component={Home} />
        <Route path='/news' component={News} />
        <Route path='/settings' component={Settings} />

      </div>
    </BrowserRouter>
  );
}

export default App;