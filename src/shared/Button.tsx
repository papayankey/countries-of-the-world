import { styled } from "../stitches";
import { darkTheme } from "../stitches/darkTheme";

const Button = styled("button", {
  appearance: "none",
  outline: "none",
  border: "none",
  borderRadius: "2px",
  paddingLeft: "$3",
  paddingRight: "$3",
  paddingTop: "$1",
  paddingBottom: "$1",
  letterSpacing: "1px",
  bgcolor: "$primary",
  color: "$secondary",
  cursor: "pointer",

  variants: {
    variant: {
      primary: {
        boxShadow: "$2",
        "&:hover": {
          boxShadow: "$0",
        },
      },
      secondary: {
        boxShadow: "$1",
        [`.${darkTheme} &`]: {
          boxShadow: "$0"
        }
      },
    },
  },

  defaultVariants: {
    variant: "primary",
  },
});

export default Button;
