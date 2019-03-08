import { getCountries } from '../services/countriesApi';
// import { getCountriesInfo } from '../selectors/countries';

export const FETCH_COUNTRIES = 'FETCH_COUNTRIES';
export const fetchCountries = () => ({
  type: FETCH_COUNTRIES,
  payload: getCountries()
});

// export const FETCH_COUNTRIES_INFO = 'FETCH_COUNTRIES_INFO';
// export const fetchCountriesInfo  = () => ({
//   type: FETCH_COUNTRIES_INFO,
//   payload: getCountriesInfo()
// });
