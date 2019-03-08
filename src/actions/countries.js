import { getCountries } from '../services/countriesApi';

export const FETCH_COUNTRIES = 'FETCH_COUNTRIES';
export const fetchCountries = () => ({
  type: FETCH_COUNTRIES,
  payload: getCountries()
});
