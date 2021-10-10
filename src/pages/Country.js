import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { CardDetail, BackButton, ActivityIndicator } from '../components';
import { Container, Box } from '../shared';

function Country() {
  const [data, setData] = useState(null);
  const { name } = useParams();

  useEffect(() => {
    async function queryCountry() {
      const data = await (
        await fetch(`https://restcountries.eu/rest/v2/name/${name}`)
      ).json();
      setData(data);
    }
    queryCountry();
  }, [name]);

  const isLoading = data === null || data.length === 0;

  return (
    <Container px={['xl', 0]}>
      <BackButton />
      {isLoading && (
        <Box mt="4xl">
          <ActivityIndicator />
        </Box>
      )}
      {data && data.length > 0 && <CardDetail country={data[0]} />}
    </Container>
  );
}

export default Country;
