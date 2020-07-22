import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from '../theme';
import { GlobalStyles } from './GlobalStyles';

export function ThemeComponent({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
}
