import React, { useState, useEffect } from 'react';
import './Weather.css';
import { Link } from 'react-router-dom';


function Weather(props) {
  const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
  const [weather, setWeather] = useState({});

  const city = props.city ? props.city : 'Stockholm';

  useEffect(() => {
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
            <h1>{city}</h1>
            <div className='divWeather'>
              <div>
                <img className='imgWeather' alt="weather" src={weather.weather ? `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png` : ''}></img>
              </div>
              <div>
                <p>{weather.weather ? weather.weather[0].main : ''}</p>
                <p>{weather.weather ? weather.weather[0].description : ''}</p>
              </div>
              <div>
                <p>Min temp: {weather.main ? parseInt(weather.main.temp_min - 273.15) + '°C' : ''}</p>
                <p>Max temp: {weather.main ? parseInt(weather.main.temp_max - 273.15) + '°C' : ''}</p>
              </div>
            </div>
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
