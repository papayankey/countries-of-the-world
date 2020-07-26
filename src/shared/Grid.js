import React from 'react';
import styled from 'styled-components';
import { grid } from 'styled-system';
import propTypes from '@styled-system/prop-types';

import { Box } from './Box';

const StyledGrid = styled(Box)(
  {
    display: 'grid',
  },
  grid
);

export function Grid({ children, ...other }) {
  return <StyledGrid {...other}>{children}</StyledGrid>;
}

Grid.propTypes = {
  ...propTypes.grid,
};
