import { getCountries } from '../services/countriesApi';

export const FETCH_COUNTRIES = 'FETCH_COUNTRIES';
export const LOAD_COUNTRIES_START = 'LOAD_COUNTRIES_START';
export const LOAD_COUNTRIES_END = 'LOAD_COUNTRIES_END';

export const fetchComments = () => ({
  type: FETCH_COUNTRIES,
  loadStart: LOAD_COUNTRIES_START,
  payload: getCountries(),
  loadEnd: LOAD_COUNTRIES_END
});
