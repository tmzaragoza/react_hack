import React from 'react';
import PropTypes from 'prop-types';

export default function Country({ country }) {
  console.log('country', country.languages);
  
  const languages = country.languages.map((language, i) => {
    return <li key={i}>{language.name}</li>;
  });

  return (
    <li>
      <img src={country.flag} />
      <h3>{country.name}</h3>
      <p>Capital City: {country.capital}</p>
      <p>Population: {country.population}</p> 
      <ol>Language/s: {languages}</ol>
    </li>
  );
}

Country.propTypes = {
  country: PropTypes.object.isRequired
};
