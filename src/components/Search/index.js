import React from 'react';

import { Container, Flex } from '../../shared';
import { Input } from './Input';

function Search() {
  return (
    <Container>
      <Flex mt="2xl">
        <Input />
      </Flex>
    </Container>
  );
}

export default Search;
