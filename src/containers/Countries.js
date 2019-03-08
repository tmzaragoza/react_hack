import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Countries from '../components/Countries';
import { getCountries } from '../selectors/countries';
import { fetchCountries } from '../actions/countries';

class CountriesContainer extends PureComponent {
  static propTypes = {
    countries: PropTypes.object,
    fetch: PropTypes.func
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
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CountriesContainer);
