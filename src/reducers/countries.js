import { FETCH_COUNTRIES, UPDATE_SEARCH_TERM } from '../actions/countries';
const initialState = {
  countries: [],
  term: ''
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_COUNTRIES:
      return {
        ...state,
        countries: action.payload
      };
    case UPDATE_SEARCH_TERM: 
      return {
        ...state,
        term: action.payload
      };
    default:
      return state;
  }
}
