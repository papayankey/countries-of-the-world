import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { CardDetail, BackButton } from '../components';
import { Container, Box, Text } from '../shared';

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
      <Box mt="4xl">{isLoading && <Text>Loading....</Text>}</Box>
      {data && data.length > 0 && <CardDetail country={data[0]} />}
    </Container>
  );
}

export default Country;
