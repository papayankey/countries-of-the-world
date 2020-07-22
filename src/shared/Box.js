import styled from 'styled-components';
import { layout, space, position, compose } from 'styled-system';
import css from '@styled-system/css';
import propTypes, { propType } from '@styled-system/prop-types';

import { backgroundColor, boxShadow } from '../customFns';

// Box
export const Box = styled('div')(
  css({
    margin: 0,
    minWidth: 0,
    backgroundColor: 'white',
  }),
  compose(space, layout, backgroundColor, position, boxShadow)
);

Box.propTypes = {
  ...propTypes.space,
  ...propTypes.layout,
  backgroundColor: propType,
  boxShadow: propType,
};
