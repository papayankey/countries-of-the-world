import React from 'react';

import { AppBar, Search } from './components';
import { Container, Flex } from './shared';

function App() {
  return (
    <>
      <AppBar />
      <Container>
        <Flex mt="2xl">
          <Search />
        </Flex>
      </Container>
    </>
  );
}

export default App;
