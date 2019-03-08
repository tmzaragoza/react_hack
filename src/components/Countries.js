import React from 'react';
import PropTypes from 'prop-types';
import Country from '../components/Country';

export default function Countries({ countries }) {
  const listOfCountries = countries.map((country, i) => {
    return <li key={i}><Country country={country} /></li>;
  });
  
  return (
    <ul>{listOfCountries}</ul>
  );
}

Countries.propTypes = {
  countries: PropTypes.array.isRequired
};
