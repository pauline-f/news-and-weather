import React, { useState, useEffect } from 'react';
import './Weather.css';
import { Link } from 'react-router-dom';


function Weather(props) {
  const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
  const [weather, setWeather] = useState({});

  const city = props.city ? props.city : 'Stockholm';

  useEffect(() => {
    // fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=***REMOVED***`)
    fetch(`/api/weather?city=${city}`)
      .then(response => response.json())
      .then(data => setWeather(data))
  }, [])

  const isCityFound = (weather.cod === '404') ? false : true;

  return (
    <div className="Weather">
      <div>
        {isCityFound ? (
          <div>
            <h3>{city}</h3>
            <p>{weather.weather ? weather.weather[0].main : ''}</p>
            <p>{weather.weather ? weather.weather[0].description : ''}</p>
            <img alt="weather" src={weather.weather ? `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png` : ''}></img>
            <p>Min temperature: {weather.main ? parseInt(weather.main.temp_min - 273.15) : ''}</p>
            <p>Max temperature: {weather.main ? parseInt(weather.main.temp_max - 273.15) : ''}</p>
          </div>
        ) : (
            <div>
              <h3>City not found</h3>
              {<Link to="/settings">Save a new city</Link>}
            </div>
          )}
      </div>

</div >
  );
}

export default Weather;
