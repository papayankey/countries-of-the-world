import React, { useState } from 'react';
import styled from 'styled-components';
import css from '@styled-system/css';
import PropType from 'prop-types';

import { Box, Text, Flex } from '../shared';

const StyledList = styled(Text)(
  css({
    listStyle: 'none',
    cursor: 'pointer',
    paddingY: 'md',
    paddingLeft: 'lg',
    '&:hover': {
      backgroundColor: 'gray200',
    },
  })
);

function Select({ onChangeRegion, currentRegion }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box position="relative">
      <Flex
        onClick={() => setIsOpen(!isOpen)}
        boxShadow="sm"
        bg="white"
        width="200px"
        py="md"
        px="lg"
        mt={['4xl', 0]}
        alignItems="center"
        justifyContent="space-between"
        style={{ cursor: 'pointer' }}
      >
        <Text color="gray300">Filter by Region</Text>
        <Box mt="sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 512 512"
            style={{ transform: isOpen ? 'rotate(180deg)' : null }}
          >
            <path
              style={{
                fill: 'hsl(0, 0%, 52%)',
              }}
              d="M414,321.94,274.22,158.82a24,24,0,0,0-36.44,0L98,321.94c-13.34,15.57-2.28,39.62,18.22,39.62H395.82C416.32,361.56,427.38,337.51,414,321.94Z"
            />
          </svg>
        </Box>
      </Flex>
      {isOpen && (
        <Box
          as="ul"
          position="absolute"
          left="0"
          zIndex="2"
          width="100%"
          bg="white"
          mt="md"
          boxShadow="sm"
        >
          {['All', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'].map(
            region => (
              <StyledList
                key={region}
                as="li"
                onClick={() => {
                  onChangeRegion(region);
                  setIsOpen(false);
                }}
                style={{
                  backgroundColor:
                    currentRegion === region ? 'hsl(0, 0%, 90%)' : null,
                }}
              >
                {region}
              </StyledList>
            )
          )}
        </Box>
      )}
    </Box>
  );
}

Select.propType = {
  onChangeRegion: PropType.func.isReequired,
  currentRegion: PropType.func,
};

export default Select;
