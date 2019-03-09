import { UPDATE_SEARCH_TERM } from '../actions/countries';
const initialState = {
  term: ''
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case UPDATE_SEARCH_TERM: 
      return {
        ...state,
        term: action.payload
      };
    default:
      return state; 
  }
}
