import { styled } from "../stitches";

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
  boxShadow: "$2",
  "&:hover": {
    boxShadow: "$1",
  },
  bgcolor: "$white",
  cursor: "pointer",
});

export default Button;
