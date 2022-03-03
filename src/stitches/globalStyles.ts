import { globalCss } from "./index";

const globalStyles = globalCss({
  ":root": {
    boxSizing: "border-box",
    fontFamily: "Nunito, sans-serif",
    "-moz-osx-font-smoothing": "grayscale",
    "-webkit-font-smoothing": "antialiased",
  },
  "*, *::before, *::after": {
    boxSizing: "inherit",
  },
  "html, body, div, span, object, iframe,h1, h2, h3, h4, h5, h6, p, blockquote, pre,abbr, address, cite, code,del, dfn, em, img, ins, kbd, q, samp,small, strong, sub, sup, var,b, i,dl, dt, dd, ol, ul, li,fieldset, form, label, legend,table, caption, tbody, tfoot, thead, tr, th, td,article, aside, canvas, details, figcaption, figure, footer, header, hgroup, menu, nav, section, summary,time, mark, audio, video":
    {
      margin: 0,
      padding: 0,
      border: 0,
      outline: 0,
      fontSize: "100%",
      verticalAlign: "baseline",
      background: "transparent",
    },
  "nav ul": {
    listStyle: "none",
  },
  a: {
    margin: 0,
    padding: 0,
    fontSize: "100%",
    verticalAlign: "baseline",
    background: "transparent",
    textDecoration: "none",
  },
  "input, select": {
    verticalAlign: "middle",
  },
  body: {
    lineHeight: "normal",
    backgroundColor: "$gray100",
  },
});

export { globalStyles };
