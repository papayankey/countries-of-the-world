import styled from 'styled-components';
import { typography, compose } from 'styled-system';
import css from '@styled-system/css';
import propTypes from '@styled-system/prop-types';

import { textColor } from '../customFns';

const Text = styled('p')(
  css({
    fontWeight: 'semiBold',
    fontSize: 3,
    color: 'blue100',
  }),
  compose(typography, textColor)
);

Text.propTypes = {
  ...propTypes.typography,
};

export default Text;
