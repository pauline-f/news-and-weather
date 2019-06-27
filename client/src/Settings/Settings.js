import React from 'react';
import './Settings.css';
import Country from '../Country/Country';


const countries = [{ id: 'se', name: 'Sweden' }, { id: 'fr', name: 'France' }, { id: 'de', name: 'Germany' }, { id: 'gb', name: 'United Kingdom' }, { id: 'it', name: 'Italy' }]


function Settings(props) {
  const onClick = e => {
    const city = document.getElementById('city').value;
    localStorage.setItem('city', city);
    props.setCity(city);
  };

  return (
    <div className="Settings">
      <h3>Country:</h3>
      <div>
        {countries.map((element, index) => {
          return <Country key={index} name={element.name} country={element.id} setCountry={props.setCountry} selectedCountry={props.country} />
        })}

      </div>

      <div>
        <h3>City:</h3>
        <input type='text' id='city' />
        <button onClick={onClick}>Save</button>
      </div>
    </div>
  );
}

export default Settings;
