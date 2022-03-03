import * as React from "react";

import { Box } from "../../shared";
import { css } from "../../stitches";

const Defaults = css({
  fill: "none",
  stroke: "hsl(0, 0%, 52%)",
  // stroke: isDark ? 'hsl(0, 0%, 98%)' : 'hsl(0, 0%, 52%)',
  strokeMiterlimit: 10,
  strokeWidth: "32px",
});

const HandLense = () => {
  return (
    <Box
      css={{
        position: "absolute",
        ml: "$2",
        height: "100%",
        display: "flex",
        alignItems: "center",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 512 512"
      >
        <path
          d="M221.09,64A157.09,157.09,0,1,0,378.18,221.09,157.1,157.1,0,0,0,221.09,64Z"
          className={Defaults()}
        />
        <line
          x1="338.29"
          y1="338.29"
          x2="448"
          y2="448"
          className={Defaults()}
        />
      </svg>
    </Box>
  );
};

export default HandLense;
