import { FETCH_COUNTRIES } from '../actions/countries';
const initialState = {
  countries: []
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_COUNTRIES:
      return {
        ...state,
        countries: action.payload
      };
    default:
      return state;
  }
}
