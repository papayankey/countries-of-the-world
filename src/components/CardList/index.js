import React from 'react';
import { Card } from './Card';
import { Grid } from '../../shared';

function CardList() {
  return (
    <Grid
      mt="2xl"
      gridTemplateColumns="repeat(auto-fill, minmax(200px, 1fr))"
      gridGap="40px"
    >
      {[...new Array(7)].map((_, idx) => (
        <Card key={idx} />
      ))}
    </Grid>
  );
}

export default CardList;
