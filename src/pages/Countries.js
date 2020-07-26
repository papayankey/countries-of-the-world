import React from 'react';

import { Search, Select, CardList } from '../components';
import { Flex, Container } from '../shared';

function Countries() {
  return (
    <Container>
      <Flex mt="3xl" justifyContent="Space-between" flexWrap="wrap">
        <Search />
        <Select />
      </Flex>
      <CardList />
    </Container>
  );
}

export default Countries;
