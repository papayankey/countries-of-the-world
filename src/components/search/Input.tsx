import { styled } from "../../stitches";

const Input = styled("input", {
  fontSize: "$2",
  // color: isDark ? "gray100" : null,
  width: "100%",
  boxShadow: "$1",
  backgroundColor: "$white",
  // boxShadow: isDark ? "0 0 4px 2px hsl(207, 26%, 17%)" : "sm",
  // bg: isDark ? "blue100" : "white",
  border: "none",
  py: "$2",
  px: "$7",
  "&:focus": {
    outline: "none",
  },
  "::placeholder": {
    color: "$gray300"
    //   color: isDark ? "gray200" : "gray300",
  },
});

export default Input;
