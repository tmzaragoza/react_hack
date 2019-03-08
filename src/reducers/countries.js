import { FETCH_COUNTRIES } from '../actions/countries';
const initialState = {
  countries: [
    {
      name: 'fake name',
      capital: 'fake capital',
      population: [],
      language: 'fake language',
      flag: 'flag'
    }
  ] 
  // capital: 'capital',
  // lang: 'language',
  // flag: 'flag'
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
