import React, { useState } from 'react';
import { Flex, Text, Container, Box } from '../shared';

function AppBar() {
  const [isDark, setDark] = useState(false);

  return (
    <Box height="5xl" boxShadow="sm">
      <Container>
        <Flex height="100%" alignItems="center" justifyContent="space-between">
          <Text fontWeight="extraBold" fontSize={[3, 4]}>
            Where in the world?
          </Text>
          <Flex>
            <Box mr="md">
              <svg
                onClick={() => setDark(!isDark)}
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 512 512"
                style={{ cursor: 'pointer' }}
              >
                <path
                  d="M160,136c0-30.62,4.51-61.61,16-88C99.57,81.27,48,159.32,48,248c0,119.29,96.71,216,216,216,88.68,0,166.73-51.57,200-128-26.39,11.49-57.38,16-88,16C256.71,352,160,255.29,160,136Z"
                  style={{
                    fill: isDark ? '#000' : 'none',
                    stroke: '#000',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    strokeWidth: '32px',
                  }}
                />
              </svg>
            </Box>
            <Text fontWeight="semiBold">Dark Mode</Text>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}

export default AppBar;
