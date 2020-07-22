import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from '../theme';
import { CSSBaseline } from './CSSBaseline';

export function ThemeComponent({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <CSSBaseline />
      {children}
    </ThemeProvider>
  );
}
