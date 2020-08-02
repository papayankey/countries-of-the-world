import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';

import { CardDetail, BackButton, ThemeContext } from '../components';
import { Container, Box, Text } from '../shared';

function Country() {
  const isDark = useContext(ThemeContext);
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
          <Text color={isDark ? 'white' : null}>Loading...</Text>
        </Box>
      )}
      {data && data.length > 0 && <CardDetail country={data[0]} />}
    </Container>
  );
}

export default Country;
