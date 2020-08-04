import React from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';

import theme from '../theme';

function ThemeComponent({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

ThemeComponent.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};

export default ThemeComponent;
