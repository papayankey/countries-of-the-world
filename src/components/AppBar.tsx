import * as React from "react";
import { Box, Container, Flex, Typography } from "../shared/index";
import { Moon } from "./icons";

const AppBar: React.FC = () => {
  return (
    <Box
      css={{
        height: "$8",
        // boxShadow={isDark ? '0 0 6px 4px hsl(207, 26%, 17%)' : 'md'}
        boxShadow: "$2",
        bgcolor: "$white",
        borderRadius: "none",
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
          <Flex css={{ alignItems: "center", cursor: "pointer" }}>
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
