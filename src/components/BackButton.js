import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { Flex, Box, Text } from '../shared';
import { ThemeContext } from '../components';

function BackButton() {
  const isDark = useContext(ThemeContext);

  return (
    <Link to="/">
      <Flex
        justifyContent="center"
        alignItems="center"
        width={['120px', '100px']}
        boxShadow={isDark ? '0 0 4px 2px hsl(207, 26%, 17%)' : 'sm'}
        bg={isDark ? 'blue100' : 'white'}
        mt="4xl"
        px="lg"
        style={{ cursor: 'pointer' }}
      >
        <Box mr="sm" mt="sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 512 512"
          >
            <polyline
              points="244 400 100 256 244 112"
              style={{
                fill: 'none',
                stroke: isDark ? 'hsl(0, 0%, 98%)' : '#000',
                strokeLineCape: 'round',
                strokeLineJoin: 'round',
                strokeWidth: '30px',
              }}
            />
            <line
              x1="120"
              y1="256"
              x2="412"
              y2="256"
              style={{
                fill: 'none',
                stroke: isDark ? 'hsl(0, 0%, 98%)' : '#000',
                strokeLineCape: 'round',
                strokeLineJoin: 'round',
                strokeWidth: '30px',
              }}
            />
          </svg>
        </Box>
        <Text color={isDark ? 'hsl(0, 0%, 98%)' : null}>Back</Text>
      </Flex>
    </Link>
  );
}

export default BackButton;
