import React from 'react';
import './CitySettings.css';



function CitySettings(props) {
  let cities;
  const removeCity = (e) => {
    const city = e.target.value;
    console.log(city);
    cities = JSON.parse(localStorage.getItem('city'));
    const index = cities.indexOf(city);
    cities.splice(index, 1);
    localStorage.setItem('city', JSON.stringify(cities));
    props.setCity(cities);
  }

  return (
    <div className="CitySettings">
      <div className='listCities'>
        {props.city}
        <button className='remove' onClick={removeCity} value={props.city}>Remove</button>
      </div>
    </div>
  );
}

export default CitySettings;
