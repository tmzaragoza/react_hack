import React from 'react';
import PropTypes from 'prop-types';

export default function Country({ country }) {
  return (
    <>
      <img src={country.flag} />
      <h3>{country.name}</h3>
      <p>{country.capital}</p>
      <p>{country.population}</p>
    </>
  );
}

Country.propTypes = {
  country: PropTypes.object.isRequired
};
