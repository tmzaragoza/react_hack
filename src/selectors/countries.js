export const getCountries = state => {
  return state.countryReducer.countries;
};

export const getSearchTerm = state => state.countryReducer.term;
export const getFilteredPosts = state => {
  const searchTerm = getSearchTerm(state);
  return getCountries(state).filter(country => {
    return country.name.includes(searchTerm);
  });
};
