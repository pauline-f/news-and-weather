import React from 'react';
import './Settings.css';
import Country from '../Country/Country';


const countries = [{ id: 'se', name: 'Sweden' }, { id: 'fr', name: 'France' }, { id: 'de', name: 'Germany' }, { id: 'gb', name: 'United Kingdom' }, { id: 'it', name: 'Italy' }]


function Settings(props) {

  return (
    <div className="Settings">

      {countries.map((element, index) => {
        return <Country key={index} country={element.id} setCountry={props.setCountry} selectedCountry={props.country} />
      })}
    </div>
  );
}

export default Settings;
