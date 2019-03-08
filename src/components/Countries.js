import React from 'react';
import PropTypes from 'prop-types';

export default function Countries({ country }) {
  return (
    <ul>{country.country}</ul>

  );
}

Countries.propTypes = {
  country: PropTypes.array.isRequired
};
