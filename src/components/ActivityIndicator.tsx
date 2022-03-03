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
  borderColor: "$gray300",
  borderTopColor: "$white",
  borderRadius: "50%",
  animation: `${rotate} 1s linear infinite`,
  // ${css(({ isDark }) => ({
  // borderColor: isDark ? 'white' : 'gray300',
  // borderTopColor: isDark ? 'blue200' : 'gray100',
});

export default ActivityIndicator;
