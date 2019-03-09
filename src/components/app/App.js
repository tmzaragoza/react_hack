import React from 'react';
import CountriesContainer from '../../containers/Countries';
import Header from './Header';
import 'normalize.css';

export default function App() {
  return (
    <>
      <Header />
      <CountriesContainer />
    </>
  );
}
