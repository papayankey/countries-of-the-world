import React from 'react';

import { AppBar, Search, Select } from './components';
import { Container, Flex } from './shared';

function App() {
  return (
    <>
      <AppBar />
      <Container>
        <Flex mt="2xl" justifyContent="Space-between" flexWrap="wrap">
          <Search />
          <Select />
        </Flex>
      </Container>
    </>
  );
}

export default App;
