export const getCountries = () => {
  return fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json());
};