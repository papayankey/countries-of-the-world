import React from 'react';

import { AppBar, Search, Select, CardList } from './components';
import { Container, Flex, Box } from './shared';

function App() {
  return (
    <>
      <AppBar />
      <Container>
        <Flex mt="2xl" justifyContent="Space-between" flexWrap="wrap">
          <Search />
          <Select />
        </Flex>
        <CardList />
      </Container>
      <Box height="lg" mt="2xl"></Box>
    </>
  );
}

export default App;
