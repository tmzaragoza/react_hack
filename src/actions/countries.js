import { getCountries } from '../services/countriesApi';

export const FETCH_COUNTRIES = 'FETCH_COUNTRIES';
export const fetchCountries = () => ({
  type: FETCH_COUNTRIES,
  payload: getCountries()
});

export const UPDATE_SEARCH_TERM = 'UPDATE_SEARCH_TERM';
export const updateSearchTerm = term => ({
  type: UPDATE_SEARCH_TERM,
  payload: term
});
