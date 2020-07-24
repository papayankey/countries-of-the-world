import styled from 'styled-components';
import { grid } from 'styled-system';
import propTypes from '@styled-system/prop-types';

import { Box } from './Box';

export const Grid = styled(Box)(
  {
    display: 'grid',
  },
  grid
);

Grid.propTypes = {
  ...propTypes.grid,
};
