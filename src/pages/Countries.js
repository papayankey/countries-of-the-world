import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';

import { Search, Select, Card, Pagination } from '../components';
import { Flex, Container, Grid, Box } from '../shared';

function Countries() {
  const [region, setRegion] = useState('All');
  let { data, isLoading, isError } = useQuery('countries', fetchCountries, {
    cacheTime: 1000 * 60 * 10,
  });

  async function fetchCountries() {
    const response = await (
      await fetch('https://restcountries.eu/rest/v2/all')
    ).json();
    return response;
  }

  const handleFilterByRegion = filter => setRegion(filter);

  return (
    <Container>
      <Flex mt="3xl" justifyContent="Space-between" flexWrap="wrap">
        <Search />
        <Select handleFilterByRegion={handleFilterByRegion} />
      </Flex>
      <Grid
        mt="4xl"
        gridTemplateColumns="repeat(auto-fill, minmax(250px, 1fr))"
        gridGap="40px"
      >
        {isLoading && <Box as="p">Loading...</Box>}
        {isError && <Box as="p">Oops! something went wrong</Box>}
        {data &&
          data.map(country => {
            return (
              <Link key={country.name} to={`/countries/${country.name}`}>
                <Card country={country} />
              </Link>
            );
          })}
      </Grid>
      {data && (
        <Pagination
          totalCountries={data.length}
          // pageNumber={currentPage}
          // countriesPerPage={countriesPerPage}
          // paginate={paginate}
        />
      )}
    </Container>
  );
}

export default Countries;
