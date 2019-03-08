export const getCountries = state => {
  return state.countryReducer.countries;
};

// export const getCountries = state => {
//   return state.countryReducer.countries.map(country => {
//     return {
//       name: country.name,
//       capital: country.capital,
//       flag: country.flag,
//       languages: country.languages,
//       population: country.population
//     };
//   });
// };
