import React from 'react';
import PropTypes from 'prop-types';
import Country from '../components/Country';
import Input from '@material-ui/core/Input';
import { withStyles } from '@material-ui/core/styles';
import styles1 from '../components/app/App.css';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  input: {
    margin: theme.spacing.unit,
  },
});

function Countries({ countries, term, onChange }) {
  const listOfCountries = countries.map(country => {
    return <Country key={country.name} country={country} />;
  });

  return (
    <>
      <Input type="text" name="term" value={term} onChange={onChange}
        placeholder='Search'
        inputProps={{
          'aria-label': 'Description',
        }}
      />
      <ul className={styles1.ul}>{listOfCountries}</ul>
    </>
  );
}

Countries.propTypes = {
  countries: PropTypes.array.isRequired,
  term: PropTypes.string,
  onChange: PropTypes.func
};
export default withStyles(styles)(Countries);
