import React from 'react';
import './Country.css';

function Country(props) {

  const onChange = e => {
    localStorage.setItem('country', e.target.value);
    props.setCountry(e.target.value)
  };


  return (
    <div className="Country">
      <input type="radio" id={props.country} name="country" onChange={onChange} checked={props.country === props.selectedCountry} />
      <label htmlFor={props.country}>{props.name}</label>

    </div>
  );
}

export default Country;
