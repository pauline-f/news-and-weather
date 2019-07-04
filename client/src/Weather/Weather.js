import React from 'react';
import './Weather.css';
import CityWeather from '../CityWeather/CityWeather';


function Weather(props) {
  
  console.log(props.city);

  return (
    <div className="Weather">
        {
          props.city.map((c, index) => (
            <CityWeather key={index} c={c} />
          ))
        }
        {/* <CityWeather  c={'Paris'} />
        <CityWeather  c={'Stockholm'} /> */}
    </div >
  );
}

export default Weather;
