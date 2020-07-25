import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card } from './Card';
import { Grid, Box } from '../../shared';

import { data } from '../../data';

function CardList() {
  const [countryData, setCountryData] = useState([]);

  useEffect(() => {
    function getCountryData(data) {
      setCountryData(data);
    }
    getCountryData(data);
  });

  return (
    <Grid
      mt="2xl"
      gridTemplateColumns="repeat(auto-fill, minmax(200px, 1fr))"
      gridGap="40px"
    >
      {countryData.length > 0 ? (
        countryData.map(data => {
          return (
            <Link to="/country">
              <Card key={data.name} data={data} />
            </Link>
          );
        })
      ) : (
        <Box as="p">No Data!</Box>
      )}
    </Grid>
  );
}

export default CardList;
