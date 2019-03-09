import countryReducer from './countries';
import term from './term';
import { combineReducers } from 'redux';

export default combineReducers({
  countryReducer,
  term
});
