import { FETCH_COUNTRIES } from '../actions/countries';
const initialState = {
  country: [
    {
      name: 'fake name'
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
        country: action.payload
      };
    default:
      return state;
  }
}
