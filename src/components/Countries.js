import React from 'react';
import PropTypes from 'prop-types';
import Country from '../components/Country';
import Input from '@material-ui/core/Input';
import { withStyles } from '@material-ui/core/styles';
import styles1 from './Countries.css';

const styles = theme => ({
  container: {
    display: 'center',
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
    <div className={styles1.countries}>
      <Input type="text" name="term" value={term} onChange={onChange}
        placeholder='Search'
        inputProps={{
          'aria-label': 'Description',
        }}
      />
    </div>
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
