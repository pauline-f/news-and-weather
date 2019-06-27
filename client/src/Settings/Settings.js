import React, { useState } from 'react';
import './Settings.css';

const countries = [{ id: 'se', name: 'Sweden' }, { id: 'fr', name: 'France' }, { id: 'de', name: 'Germany' }, { id: 'gb', name: 'United Kingdom' }, { id: 'es', name: 'Spain' }, { id: 'it', name: 'Italy' }]


function Settings() {
  const [selectedCountry, setSelectedCountry] = useState('se');

  return (
    <div className="Settings">
      <select name="country">
        {countries.map(country => (
          <option value={country.id} selected={selectedCountry===country.id}>{country.name}</option>
        ))}
      </select>
    </div>
  );
}

export default Settings;
