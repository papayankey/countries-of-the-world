import React from 'react';

import { Search, Select, CardList } from '../components';
import { Flex } from '../shared';
import { Container } from '../shared';

function Countries() {
  return (
    <Container>
      <Flex mt="2xl" justifyContent="Space-between" flexWrap="wrap">
        <Search />
        <Select />
      </Flex>
      <CardList />
    </Container>
  );
}

export default Countries;
