import { styled } from "../stitches";

import Box from "./Box";

const Container = styled(Box, {
  height: "100%",
  width: "100%",
  px: "$3",
  "@bp1": { width: "80%", px: 0, mx: "auto" },
});

export default Container;
