import { ConfigType } from "@stitches/react/types/config";

const theme: ConfigType.Theme = {
  colors: {
    white: "hsl(0, 0%, 100%)",
    black: "hsl(0, 0%, 0%)",
    blue100: "hsl(209, 23%, 22%)",
    blue200: "hsl(207, 26%, 17%)",
    blue300: "hsl(200, 15%, 8%)",
    gray100: "hsl(0, 0%, 95%)",
    gray200: "hsl(0, 0%, 90%)",
    gray300: "hsl(0, 0%, 52%)",
  },
  space: {
    0: 0,
    1: "5px",
    2: "10px",
    3: "15px",
    4: "20px",
    5: "25px",
    6: "35px",
    7: "45px",
    8: "65px",
    9: "80px",
  },
  fontSizes: {
    1: "10px",
    2: "14px",
    3: "18px",
    4: "20px",
    5: "24px",
    6: "28px",
  },
  fonts: {
    body: "Nunito Sans, sans-serif",
  },
  fontWeights: {
    default: 300,
    semiBold: 600,
    bold: 800,
  },
  lineHeights: {
    normal: 1,
    wide: 1.25,
    wider: 1.5,
  },
  // letterSpacings: {},
  sizes: {
    0: 0,
    1: "5px",
    2: "10px",
    3: "15px",
    4: "20px",
    5: "25px",
    6: "35px",
    7: "45px",
    8: "65px",
    9: "80px",
  },
  // borderWidths: {},
  // borderStyles: {},
  radii: {
    0: 0,
    1: "3px",
    2: "5px",
    3: "10px",
  },
  shadows: {
    0: "none",
    1: "0 0 0 hsl(0, 0%, 95%), 0 2px 4px hsl(0, 0%, 80%)",
    2: "0 0 0 hsl(0, 0%, 95%), 0 4px 8px hsl(0, 0%, 80%)",
    3: "0 0 0 hsl(0, 0%, 95%), 0 8px 16px hsl(0, 0%, 80%)",
  },
  // zIndices: {},
  // transitions: {},
};

export default theme;
