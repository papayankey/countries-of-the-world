import React from 'react';
import { Link } from 'react-router-dom';

import { Flex, Box, Text } from '../../shared';

export function NavigateBack() {
  return (
    <Link to="/">
      <Flex
        justifyContent="center"
        alignItems="center"
        width={['120px', '100px']}
        boxShadow="sm"
        bg="white"
        mt="4xl"
        px="lg"
        py="sm"
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
                stroke: '#000',
                strokeLineCape: 'round',
                strokeLineJoin: 'round',
                strokeWidth: '48px',
              }}
            />
            <line
              x1="120"
              y1="256"
              x2="412"
              y2="256"
              style={{
                fill: 'none',
                stroke: '#000',
                strokeLineCape: 'round',
                strokeLineJoin: 'round',
                strokeWidth: '48px',
              }}
            />
          </svg>
        </Box>
        <Text>Back</Text>
      </Flex>
    </Link>
  );
}
