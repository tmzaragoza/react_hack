import React from 'react';
import PropTypes from 'prop-types';
import styles from '../components/Country.css';

export default function Country({ country }) {
  const languages = country.languages.map((language, i) => {
    return <li className={styles.li}key={i}>{language.name}</li>;
  });

  return (
    <div className={styles.country}>
      <li>
        <img src={country.flag} />
        <h3>{country.name}</h3>
        <p>Capital City: {country.capital}</p>
        <p>Population: {country.population}</p>
        <p>Languages</p>
        <ol>{languages}</ol>
      </li>
    </div>
  );
}

Country.propTypes = {
  country: PropTypes.object.isRequired
};
