import React, { useState, useEffect } from 'react';
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
  const [page, setPage] = useState(
    () => (cache['page'] > 5 ? 1 : cache['page']) || 1
  );
  const totalPerPage = 12;
  const [searchTerm, setSearchTerm] = useState(null);

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

    if (searchTerm) {
      filteredData = filterBySearchTerm();
    } else if (currentRegion === 'All') {
      filteredData = data;
    } else {
      filteredData = data.filter(item => item.region === currentRegion);
    }
    filteredDataPerPage = filteredData.slice(indexOfFirst, indexOfLast);
  }

  function filterBySearchTerm() {
    function convertToLowerCase({ region, name, capital }) {
      return [region, name, capital].map(item => item.toLowerCase());
    }

    return data.filter(item => {
      const [region, name, capital] = convertToLowerCase(item);
      return (
        region === searchTerm ||
        region.includes(searchTerm) ||
        name === searchTerm ||
        name.includes(searchTerm) ||
        capital === searchTerm ||
        capital.includes(searchTerm)
      );
    });
  }

  function changeRegion(region) {
    if (searchTerm) {
      setSearchTerm(null);
      setCurrentRegion(region);
    }

    if (currentRegion !== region) {
      setCurrentRegion(region);
      cache['region'] = region;
    }
    setPage(1);
  }

  function changePage(pageNumber) {
    setPage(pageNumber);
    cache['page'] = pageNumber;
  }

  function onSearch(text) {
    setPage(1);
    setSearchTerm(text);
  }

  return (
    <Container>
      <Flex mt="3xl" justifyContent="Space-between" flexWrap="wrap">
        <Search onSearch={onSearch} />
        <Select onChangeRegion={changeRegion} currentRegion={currentRegion} />
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
          <CardList countries={filteredDataPerPage} searchTerm={searchTerm} />
        </Grid>
      )}
      {filteredData && filteredData.length > totalPerPage ? (
        <Pagination
          data={filteredData.length}
          totalPages={totalPerPage}
          currentPage={page}
          onChangePage={changePage}
        />
      ) : (
        <Box my="3xl" height="100px" />
      )}
    </Container>
  );
}

export default Countries;
