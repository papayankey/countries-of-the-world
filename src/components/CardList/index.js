import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';

import { Pagination } from '../index';

import { Card } from './Card';
import { Grid, Box } from '../../shared';

function CardList() {
  const { data, isLoading, isError } = useQuery('countries', fetchCountries, {
    cacheTime: 1000 * 60 * 10,
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage] = useState(12);

  async function fetchCountries() {
    const response = await (
      await fetch('https://restcountries.eu/rest/v2/all')
    ).json();
    return response;
  }

  // get first and last data indices
  // get slice data with indices
  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentData =
    data && data.slice(indexOfFirstCountry, indexOfLastCountry);

  // change pages
  const paginate = pageNumber => setCurrentPage(pageNumber);

  if (isLoading)
    return (
      <Box as="p" mt="4xl">
        Loading...
      </Box>
    );

  if (isError)
    return (
      <Box as="p" mt="4xl">
        Oops! something went wrong
      </Box>
    );

  return (
    <>
      <Grid
        mt="4xl"
        gridTemplateColumns="repeat(auto-fill, minmax(250px, 1fr))"
        gridGap="40px"
      >
        {currentData.map(country => {
          return (
            <Link key={country.name} to={`/countries/${country.name}`}>
              <Card country={country} />
            </Link>
          );
        })}
      </Grid>
      <Pagination
        totalCountries={data.length}
        pageNumber={currentPage}
        paginate={paginate}
      />
    </>
  );
}

export default CardList;
