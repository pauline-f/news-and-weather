import React, { useState, useEffect } from 'react';
import './Weather.css';

function Weather(props) {
  const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
  const [weather, setWeather] = useState({});

  const city = props.city ? props.city : 'Stockholm';

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=***REMOVED***`)
    .then(response => response.json())
    .then(data => setWeather(data))
  }, [])
  
  return (
    <div className="Weather">

      <h3>{city}</h3>

      <p>{weather.weather ? weather.weather[0].main : ''}</p>
      <p>{weather.weather ? weather.weather[0].description : ''}</p>
      <img  alt="weather" src={weather.weather ? `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png` : ''}></img>
      <p>Min temperature: {weather.main ? parseInt(weather.main.temp_min - 273.15) : ''}</p>
      <p>Max temperature: {weather.main ? parseInt(weather.main.temp_max  - 273.15) : ''}</p>
      
    </div>
  );
}

export default Weather;
