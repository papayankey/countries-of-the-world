import * as React from "react";
import { Box, Container, Flex, Typography } from "../shared/index";
import { Moon } from "./icons";

interface AppBarProps {
  handleThemeToggle: () => void;
}

const AppBar: React.FC<AppBarProps> = ({ handleThemeToggle }) => {
  return (
    <Box
      css={{
        height: "$8",
        boxShadow: "$2",
        bgcolor: "$primary",
        borderRadius: "none",
        color: "$secondary",
      }}
    >
      <Container>
        <Flex
          css={{
            height: "100%",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography
            as="h1"
            css={{
              fontWeight: "$bold",
              cursor: "pointer",
              "@bp2": {
                fontSize: "$3",
              },
              "@bp3": {
                fontSize: "$4",
              },
            }}
          >
            Where in the world?
          </Typography>
          <Flex
            css={{ alignItems: "center", cursor: "pointer" }}
            onClick={handleThemeToggle}
          >
            <Moon />
            <Typography as="h1" css={{ color: "$light" }}>
              Dark Mode
            </Typography>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default AppBar;
