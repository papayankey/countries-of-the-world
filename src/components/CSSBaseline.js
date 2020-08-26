import { createGlobalStyle } from 'styled-components';

const CSSBaseline = createGlobalStyle`
    html {
      box-sizing: border-box;
      font-family: 'Nunito', sans-serif;
      -moz-osx-font-smoothing: grayscale;
      -webkit-font-smoothing: antialiased;
    }

    *, *::before, *::after {
      box-sizing: inherit;
    }

    html, body, div, span, object, iframe,h1, h2, h3, h4, h5, h6, p, blockquote, pre,abbr, address, cite, code,del, dfn, em, img, ins, kbd, q, samp,small, strong, sub, sup, var,b, i,dl, dt, dd, ol, ul, li,fieldset, form, label, legend,table, caption, tbody, tfoot, thead, tr, th, td,article, aside, canvas, details, figcaption, figure, footer, header, hgroup, menu, nav, section, summary,time, mark, audio, video {
      margin: 0;
      padding: 0;
      border: 0;
      outline: 0;
      font-size: 100%;
      vertical-align: baseline;
      background: transparent;
    }

    nav ul {
      list-style: none;
    }

    a {
      margin: 0;
      padding: 0;
      font-size: 100%;
      vertical-align: baseline;
      background: transparent;
      text-decoration: none;
    }

    input, select {
      vertical-align: middle;
    }

    body {
      line-height: normal;
      background-color: ${({ isDark }) => {
        return isDark ? 'hsl(207, 26%, 17%)' : 'hsl(0, 0%, 98%)';
      }}
    }

    .go-back:hover {
        box-shadow: ${({ isDark }) =>
          isDark ? 'none' : '0 0 6px 4px hsl(0, 0%, 95%)'};
        background-color: ${({ isDark }) =>
          isDark ? 'hsl(209, 23%, 28%)' : 'none'};
    }
`;

export default CSSBaseline;
