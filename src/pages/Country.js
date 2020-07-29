import React, { useState, useEffect, useParams } from 'react';

import { CardDetail, BackButton } from '../components';
import { Container, Box } from '../shared';

function Country() {
  const [country, setCountry] = useState({});
  const { name: countryName } = useParams();

  useEffect(() => {
    queryCountry(countryName);
  }, [countryName]);

  async function queryCountry(countryName) {
    const response = await fetch(
      `https://restcountries.eu/rest/v2/name/${countryName}`
    );
    const data = await response.json();
    setCountry(data[0]);
  }

  return (
    <Container px={['xl', 0]}>
      <BackButton />
      {Object.keys(country).length <= 0 && (
        <Box as="p" mt="4xl">
          Loadding...
        </Box>
      )}
      <CardDetail country={country} />
    </Container>
  );
}

export default Country;
