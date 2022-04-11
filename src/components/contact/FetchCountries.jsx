import React, { useEffect, useState } from 'react';

const FetchCountries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://flagcdn.com/en/codes.json')
      .then((response) => response.json())
      .then((data) => setCountries(Object.values(data)))
      .catch((error) => console.error(error));
  }, []);

  /* eslint-disable */
  return (
    <>
      {countries.map((country, index) =>
        (<option key={country + index} value={country}>{country}</option>))}
    </>
  );
};

export default FetchCountries;
