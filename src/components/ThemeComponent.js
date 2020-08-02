import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from '../theme';

function ThemeComponent({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default ThemeComponent;
