export const getCountries = state => {
  console.log('getCountries selector', state.countries);
  return state.countries;
};
