import { createGlobalStyle } from 'styled-components';
import css from '@styled-system/css';

export const GlobalStyles = createGlobalStyle(
  css({
    html: {
      boxSizing: 'border-box',
      fontFamily: 'body',
      fontWeight: 'extraLight',
      MozOsxFontSmoothing: 'grayscale',
      WebkitFontSmoothing: 'antialiased',
    },
    '*': {
      boxSizing: 'inherit',
    },
    body: {
      margin: 0,
      padding: 0,
      backgroundColor: 'gray100',
    },
  })
);
