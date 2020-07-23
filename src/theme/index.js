const theme = {
  breakpoints: ['600px', '1000px', '1080px'],
  fonts: {
    body: 'Nunito Sans, sans-serif',
  },
  fontWeights: {
    extraLight: 300,
    semiBold: 600,
    extraBold: 800,
  },
  fontSizes: [
    '10px',
    '12px',
    '14px',
    '16px',
    '18px',
    '20px',
    '22px',
    '24px',
    '26px',
    '28px',
  ],
  colors: {
    white: 'hsl(0, 0%, 100%)',
    black: 'hsl(0, 0%, 0%)',

    blue100: 'hsl(209, 23%, 22%)',
    blue200: 'hsl(207, 26%, 17%)',
    blue300: 'hsl(200, 15%, 8%)',

    gray100: 'hsl(0, 0%, 98%)',
    gray200: 'hsl(0, 0%, 90%)',
    gray300: 'hsl(0, 0%, 52%)',
  },
  sizes: {
    none: '0',
    sm: '5px',
    md: '10px',
    lg: '15px',
    xl: '20px',
    '2xl': '25px',
    '3xl': '35px',
    '4xl': '45px',
    '5xl': '65px',
    '6xl': '80px',
  },
  space: {
    none: '0',
    sm: '5px',
    md: '10px',
    lg: '15px',
    xl: '20px',
    '2xl': '25px',
    '3xl': '35px',
    '4xl': '45px',
    '5xl': '65px',
    '6xl': '80px',
  },
  radii: ['0', '3px', '5px', '10px'],
  shadows: {
    none: 'none',
    sm: '0 0 4px 2px hsl(0, 0%, 90%)',
    md: '0 0 6px 4px hsl(0, 0%, 90%)',
    lg: '0 0 8px 6px hsl(0, 0%, 90%)',
  },
  lineHeights: {
    normal: 1,
    wide: 1.25,
    wider: 1.5,
  },
};

// Breakpoint aliases
// to be used as component e.g
// <Box mx={{sm: 1, md: 2, lg: 3, xl; 4}} />
theme.breakpoints.sm = 0;
theme.breakpoints.md = theme.breakpoints[0];
theme.breakpoints.lg = theme.breakpoints[1];
theme.breakpoints.xl = theme.breakpoints[2];

export default theme;
