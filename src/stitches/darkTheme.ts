import { createTheme } from ".";

export const darkTheme = createTheme("dark", {
    colors: {
      accent100: "hsl(209, 23%, 22%)",
      accent200: "hsl(207, 26%, 17%)",
      accent300: "hsl(200, 15%, 8%)",
      primary: "$accent100",
      secondary: "hsl(0, 0%, 100%)",
    },
    shadows: {
      0: "none",
      1: "0 0 0 hsl(209, 23%, 22%), 0 2px 4px hsl(209, 23%, 22%)",
      2: "0 0 0 hsl(207, 26%, 14%), 0 4px 8px hsl(207, 26%, 14%)",
      3: "0 0 0 hsl(200, 15%, 8%), 0 8px 16px hsl(200, 15%, 8%)",
    },
  });