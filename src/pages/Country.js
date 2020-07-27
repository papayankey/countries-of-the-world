import React from 'react';

import CardDetail, {
  NavigateBack as Navigation,
} from '../components/CardDetail';
import { Container } from '../shared';

function Country() {
  return (
    <Container px={['xl', 0]}>
      <Navigation />
      <CardDetail />
    </Container>
  );
}

export default Country;
