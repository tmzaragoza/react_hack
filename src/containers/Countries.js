import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Countries from '../components/Countries';
import { getCountries } from '../selectors/countries';
import { fetchCountries, updateSearchTerm } from '../actions/countries';

class CountriesContainer extends PureComponent {
  static propTypes = {
    countries: PropTypes.array.isRequired,
    fetch: PropTypes.func.isRequired,
    term: PropTypes.string,
    onChange: PropTypes.func
  };

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    return (
      <>
        <Countries {...this.props} />
      </>
    );
  }
}

const mapStateToProps = state => ({
  countries: getCountries(state),
  
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchCountries());
  },
  onChange({ target }) {
    return dispatch(updateSearchTerm(target.value));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CountriesContainer);
