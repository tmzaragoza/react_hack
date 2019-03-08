export const getCountries = () => {
  return fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(res => {
      return res.map(country => {
        return {
          name: country.name,
          capital: country.capital,
          flag: country.flag,
          languages: country.languages,
          population: country.population
        };
      });
    });
};
