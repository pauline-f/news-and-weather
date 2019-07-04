import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CityWeather.css';

function CityWeather(props) {

  const [weather, setWeather] = useState({});

  useEffect(() => {
    fetch(`/api/weather?city=${props.c}`)
      .then(response => response.json())
      .then(data => setWeather(data))
  }, [])

  const isCityFound = (weather.cod === '404') ? false : true;

  return (
    <div className="CityWeather">
      <div>
        {isCityFound ? (
          <div>
            <h1>{props.c}</h1>
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
              <div className='divButton'>
                {<Link className='settingsButton' to="/settings">Save a new city</Link>}
              </div>
            </div>
          )}
      </div>

    </div >
  );
}

export default CityWeather;
