import React from 'react';

import { Container } from '../shared';
import { CardDetail, Navigation } from '../components/CardDetail';

function Country() {
  return (
    <Container px={['xl', 0]}>
      <Navigation />
      <CardDetail />
    </Container>
  );
}

export default Country;
