import * as React from "react";

import { Box } from "../../shared";
import { css } from "../../stitches";

const Defaults = css({
  fill: "none",
  stroke: "hsl(0, 0%, 52%)",
  // stroke: isDark ? "hsl(0, 0%, 98%)" : "hsl(0, 0%, 52%)",
  strokeMiterlimit: 10,
  strokeWidth: "32px",
});

interface DeleteProps {
  clearText: () => void;
}

const Delete: React.FC<DeleteProps> = ({ clearText }) => {
  return (
    <Box
      css={{
        position: "absolute",
        right: "0",
        mr: "$2",
        height: "100%",
        display: "flex",
        alignItems: "center",
      }}
      onClick={() => clearText()}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 512 512"
      >
        <title>clear text</title>
        <path
          d="M448,256c0-106-86-192-192-192S64,150,64,256s86,192,192,192S448,362,448,256Z"
          className={Defaults()}
        />
        <line x1="320" y1="320" x2="192" y2="192" className={Defaults()} />
        <line x1="192" y1="320" x2="320" y2="192" className={Defaults()} />
      </svg>
    </Box>
  );
};

export default Delete;
