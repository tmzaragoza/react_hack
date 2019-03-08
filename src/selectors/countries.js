export const getCountries = state => {
  console.log('getCountries selector', state.countries.country);
  return state.countries;
};
