import * as React from "react";
import { Box } from "../../shared";

interface MenuProps {
  isOpen?: boolean;
}

const DropDownMenu: React.FC<React.PropsWithChildren<MenuProps>> = ({
  children,
  isOpen,
}) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Box
      as="ul"
      css={{
        position: "absolute",
        left: 0,
        zIndex: 2,
        width: "100%",
        mt: "$3",
        boxShadow: "$1",
        transition: "all 200ms linear",
        backgroundColor: "$white",
        // boxShadow={isDark ? "0 0 4px 2px hsl(207, 26%, 17%)" : "sm"}
      }}
    >
      {children}
    </Box>
  );
};

export default DropDownMenu;
