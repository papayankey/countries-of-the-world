import React from 'react';
import styled from 'styled-components';
import css from '@styled-system/css';

import { Box, Flex } from '../shared';

const Input = styled(Box)(
  css({
    width: '100%',
    boxShadow: 'sm',
    border: 'none',
    py: 'lg',
    px: '4xl',
    '&:focus': {
      outline: 'none',
    },
  })
);

function Search() {
  return (
    <Flex
      position="relative"
      alignItems="center"
      width={['100%', '250px', '400px']}
    >
      <Box position="absolute" pl="md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 512 512"
        >
          <path
            d="M221.09,64A157.09,157.09,0,1,0,378.18,221.09,157.1,157.1,0,0,0,221.09,64Z"
            style={{
              fill: 'none',
              stroke: 'hsl(0, 0%, 52%)',
              strokeMiterlimit: 10,
              strokeWidth: '32px',
            }}
          />
          <line
            x1="338.29"
            y1="338.29"
            x2="448"
            y2="448"
            style={{
              stroke: 'hsl(0, 0%, 52%)',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: '32px',
            }}
          />
        </svg>
      </Box>
      <Input as="input" placeholder="Search for countries ..." />
    </Flex>
  );
}

export default Search;
