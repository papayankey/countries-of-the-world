import React, { useContext } from 'react';
import styled, { keyframes, css as styledCss } from 'styled-components';
import css from '@styled-system/css';

import { Box } from '../shared';
import { ThemeContext } from '../components';

const rotate = keyframes`
  from {transform: rotate(0);}
  to {transform: rotate(360deg);}
`;

const rotateAnimation = styledCss`
  animation: ${rotate} 1s linear infinite;
`;

const Indicator = styled(Box)`
  position: relative;
  border-width: 2px;
  border-style: solid;
  border-radius: 50%;

  ${({ isDark }) =>
    css({
      width: '2xl',
      height: '2xl',
      borderColor: isDark ? 'white' : 'gray300',
      borderTopColor: isDark ? 'blue200' : 'gray100',
    })}

  ${rotateAnimation};
`;

function ActivityIndicator() {
  const isDark = useContext(ThemeContext);
  return <Indicator isDark={isDark}></Indicator>;
}

export default ActivityIndicator;
