import { styled } from "../../stitches";
import { darkTheme } from "../../stitches/darkTheme";

const Input = styled("input", {
  fontSize: "$2",
  width: "100%",
  boxShadow: "$1",
  backgroundColor: "$primary",
  border: "none",
  py: "$2",
  px: "$7",
  "&:focus": {
    outline: "none",
  },
  "&::placeholder": {
    color: "$accent300",
  },
  
  [`.${darkTheme} &`]: {
    color: "$secondary",
    boxShadow: "$0",
    "&::placeholder": {
      color: "$secondary"
    }
  }
});

export default Input;
