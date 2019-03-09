export const getCountries = state => {
  return state.countryReducer.countries;
};

export const getSearchTerm = state => state.term.term;

export const getFilteredCountry = state => {
  const searchTerm = getSearchTerm(state);
  return getCountries(state).filter(country => {
    return country.name.toLowerCase().includes(searchTerm);
  });
};
