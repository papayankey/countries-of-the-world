import { keyframes, styled } from "../stitches";

import { Box } from "../shared";
import { darkTheme } from "../stitches/darkTheme";

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
  borderColor: "$accent300",
  borderTopColor: "$accent200",
  [`.${darkTheme} &`]: {
    borderColor: "$secondary",
    borderTopColor: "$primary"
  },
  borderRadius: "50%",
  animation: `${rotate} 1s linear infinite`,
});

export default ActivityIndicator;
