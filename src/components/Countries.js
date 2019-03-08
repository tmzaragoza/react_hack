import React from 'react';
import PropTypes from 'prop-types';
import Country from '../components/Country';
import Input from '@material-ui/core/Input';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  input: {
    margin: theme.spacing.unit,
  },
});

function Countries({ countries }) {
  const listOfCountries = countries.map(country => {
    return <Country key={country.name} country={country} />;
  });

  return (
    <>
      <Input type="text" name="term" 
        placeholder='Search'
        inputProps={{
          'aria-label': 'Description',
        }}
      />
      <ul>{listOfCountries}</ul>
    </>
  );
}

Countries.propTypes = {
  countries: PropTypes.array.isRequired
};
export default withStyles(styles)(Countries);
