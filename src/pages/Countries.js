import React, { useState, useEffect, useCallback } from 'react';
// import { useQuery } from 'react-query';
import { Search, Select, CardList } from '../components';
import { Flex, Container, Grid, Box } from '../shared';

// data cache
const cache = {};

function Countries() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [currentRegion, setCurrentRegion] = useState(
    () => cache['region'] || 'All'
  );

  useEffect(() => {
    async function fetchCountries() {
      console.log('fetching new data....');
      const response = await fetch('https://restcountries.eu/rest/v2/all');
      const result = await response.json();
      setData(result);
      setIsLoading(false);
      // cache data
      cache['All'] = result;
    }

    if (cache['All']) {
      setData(cache['All']);
      setIsLoading(false);
    } else {
      fetchCountries();
    }
  }, []);

  const filterData = useCallback(
    function filterData() {
      return data.filter(item => item.region === currentRegion);
    },
    [data, currentRegion]
  );

  let filteredData = null;
  if (data) {
    if (currentRegion === 'All') filteredData = data;
    else {
      filteredData = filterData();
    }
  }

  function changeRegion(region) {
    if (currentRegion !== region) {
      setCurrentRegion(region);
      cache['region'] = region;
    }
  }

  return (
    <Container>
      <Flex mt="3xl" justifyContent="Space-between" flexWrap="wrap">
        <Search />
        <Select onChangeRegion={changeRegion} />
      </Flex>
      {isLoading && (
        <Box as="p" mt="4xl">
          Loading...
        </Box>
      )}
      {/* {isError && (
        <Box as="p" mt="4xl">
          Oops! something wrong
        </Box>
      )} */}
      {filteredData && (
        <Grid
          mt="4xl"
          gridTemplateColumns="repeat(auto-fill, minmax(250px, 1fr))"
          gridGap="40px"
        >
          <CardList countries={filteredData} />
        </Grid>
      )}
    </Container>
  );
}

export default Countries;
