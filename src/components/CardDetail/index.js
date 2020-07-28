import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Detail } from './Detail';
import { NavigateBack } from './NavigateBack';
import { Box } from '../../shared';

function CardDetail() {
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

  if (Object.keys(country).length <= 0)
    return (
      <Box as="p" mt="4xl">
        Loading...
      </Box>
    );

  return <Detail country={country} />;
}

export { NavigateBack };
export default CardDetail;
