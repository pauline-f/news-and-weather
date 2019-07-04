import React from 'react';
import './Settings.css';
import { Link } from 'react-router-dom';
import Country from '../Country/Country';
import CitySettings from '../CitySettings/CitySettings';

const countries = [{ id: 'se', name: 'Sweden' },
{ id: 'fr', name: 'France' },
{ id: 'gb', name: 'UK' },
{ id: 'de', name: 'Germany' },
{ id: 'it', name: 'Italy' }]




function Settings(props) {

  let cities;

  const onClick = () => {
    cities = JSON.parse(localStorage.getItem('city'));
    const city = document.getElementById('city').value;
    console.log(cities);
    cities.push(city);
    localStorage.setItem('city', JSON.stringify(cities));
    props.setCity(cities);
    document.getElementById('city').value = '';
  };

  console.log(props.city);

  return (
    <div className="Settings">
      <div className='container'>
        <h2>News</h2>
        <h3>Country:</h3>
        <div>
          {countries.map((element, index) => {
            return <Country key={index} name={element.name} country={element.id} setCountry={props.setCountry} selectedCountry={props.country} />
          })}
        </div>
        <div className='divButton'>
          <Link className='settingsButton button' to="/news">Go to News</Link>
        </div>
      </div>

      <div className="container">
        <div className='city'>
          <h2>Weather</h2>
          <div className="weatherCity">
            <h3>City:</h3>
            <input type='text' id='city' autoComplete='off' />
            <button onClick={onClick}>Save</button>
          </div>
        </div>
        <div>
          <ul>
            {
              props.city.map((c, index) => <CitySettings key={index} city={c} setCity={props.setCity} />)
            }
          </ul>
        </div>
        <div className='divButton'>
          <Link className='settingsButton' to="/weather">Go to Weather</Link>
        </div>
      </div>
    </div>
  );
}

export default Settings;
