import React, { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './Header/Header';
import Home from './Home/Home';
import News from './News/News';
import Weather from './Weather/Weather';
import Settings from './Settings/Settings';

if (!localStorage.getItem('country')) localStorage.setItem('country', 'se');

if (!JSON.parse(localStorage.getItem('city'))) localStorage.setItem('city', JSON.stringify(['Stockholm']));


const countryName = localStorage.getItem('country');
const cityName = JSON.parse(localStorage.getItem('city'));

function App() {
  const [country, setCountry] = useState(countryName);
  const [city, setCity] = useState(cityName);

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Route exact path='/' component={Home} />
        <Route path='/news' render={(props) => <News {...props} country={country} component={News} />} />
        <Route path='/weather' render={(props) => <Weather {...props} city={city} setCity={setCity} component={Weather} />} />
        <Route path='/settings' render={(props) => <Settings {...props} country={country} setCountry={setCountry} city={city} setCity={setCity} component={Settings} />} />
      </div>
    </BrowserRouter>
  );
}

export default App;