import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card } from './Card';
import { Grid, Box } from '../../shared';

function CardList() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetchCountries();
  }, []);

  async function fetchCountries() {
    const response = await fetch('https://restcountries.eu/rest/v2/all');
    const data = await response.json();
    setCountries(data);
  }

  return (
    <Grid
      mt="4xl"
      gridTemplateColumns="repeat(auto-fill, minmax(250px, 1fr))"
      gridGap="40px"
    >
      {countries.length > 0 ? (
        countries.map(country => {
          return (
            <Link key={country.name} to={`/countries/${country.name}`}>
              <Card country={country} />
            </Link>
          );
        })
      ) : (
        <Box as="p">Loading...</Box>
      )}
    </Grid>
  );
}

export default CardList;
