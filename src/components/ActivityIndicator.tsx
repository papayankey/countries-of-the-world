import { keyframes, styled } from "../stitches";

import { Box } from "../shared";

const rotate = keyframes({
  from: { transform: "rotate(0)" },
  to: { transform: "rotate(360deg)" },
});

const ActivityIndicator = styled(Box, {
  width: "$5",
  height: "$5",
  position: "relative",
  borderWidth: "$1",
  borderStyle: "solid",
  borderColor: "$accent200",
  borderTopColor: "$accent1",
  borderRadius: "50%",
  animation: `${rotate} 1s linear infinite`,
});

export default ActivityIndicator;
