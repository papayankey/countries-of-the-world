import React, { useState, useEffect } from 'react';
// import { useQuery } from 'react-query';
import { Search, Select, CardList, Pagination } from '../components';
import { Flex, Container, Grid, Box } from '../shared';

// data cache
const cache = {};

function Countries() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [Error, setError] = useState(null);
  const [currentRegion, setCurrentRegion] = useState(
    () => cache['region'] || 'All'
  );
  const [page, setPage] = useState(() => cache['page'] || 1);
  const totalPerPage = 12;

  const isError = Error !== null && typeof Error === 'object';

  useEffect(() => {
    async function fetchCountries() {
      try {
        const response = await fetch('https://restcountries.eu/rest/v2/all');
        const result = await response.json();
        setData(result);
        setIsLoading(false);
        // cache data
        cache['All'] = result;
      } catch (e) {
        setIsLoading(false);
        setError(e);
      }
    }

    if (cache['All']) {
      setData(cache['All']);
      setIsLoading(false);
    } else {
      fetchCountries();
    }
  }, []);

  let filteredData = null;
  let filteredDataPerPage = null;
  if (data) {
    const indexOfLast = page * totalPerPage;
    const indexOfFirst = indexOfLast - totalPerPage;

    if (currentRegion === 'All') filteredData = data;
    else filteredData = data.filter(item => item.region === currentRegion);

    filteredDataPerPage = filteredData.slice(indexOfFirst, indexOfLast);
  }

  function changeRegion(region) {
    if (currentRegion !== region) {
      setPage(1);
      setCurrentRegion(region);
      cache['region'] = region;
    }
  }

  function changePage(pageNumber) {
    setPage(pageNumber);
    cache['page'] = pageNumber;
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
      {isError && (
        <Box as="p" mt="4xl">
          Error occurred: {Error.message}
        </Box>
      )}
      {filteredData && (
        <Grid
          mt="4xl"
          gridTemplateColumns="repeat(auto-fill, minmax(250px, 1fr))"
          gridGap="40px"
        >
          <CardList countries={filteredDataPerPage} />
        </Grid>
      )}
      {filteredData && (
        <Pagination
          data={filteredData.length}
          totalPages={totalPerPage}
          currentPage={page}
          onChangePage={changePage}
        />
      )}
    </Container>
  );
}

export default Countries;
