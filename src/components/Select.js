import React, { useState } from 'react';
import styled from 'styled-components';
import css from '@styled-system/css';
import PropType from 'prop-types';

import { Box, Text, Flex } from '../shared';

const StyledList = styled(Text)(
  css({
    listStyle: 'none',
    cursor: 'pointer',
    '& + &': {
      marginTop: 'lg',
    },
    '&:hover': {
      color: 'gray200',
    },
  })
);

function Select({ handleFilterByRegion }) {
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
          >
            {isOpen ? (
              <path
                style={{ fill: 'hsl(0, 0%, 52%)' }}
                d="M98,190.06,237.78,353.18a24,24,0,0,0,36.44,0L414,190.06c13.34-15.57,2.28-39.62-18.22-39.62H116.18C95.68,150.44,84.62,174.49,98,190.06Z"
              />
            ) : (
              <path
                style={{ fill: 'hsl(0, 0%, 52%)' }}
                d="M414,321.94,274.22,158.82a24,24,0,0,0-36.44,0L98,321.94c-13.34,15.57-2.28,39.62,18.22,39.62H395.82C416.32,361.56,427.38,337.51,414,321.94Z"
              />
            )}
          </svg>
        </Box>
      </Flex>
      {isOpen && (
        <Box
          as="ul"
          position="absolute"
          zIndex="2"
          width="100%"
          bg="white"
          mt="md"
          boxShadow="sm"
          p="lg"
        >
          {['All', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'].map(
            (region, idx) => (
              <StyledList
                key={idx}
                as="li"
                onClick={() => {
                  handleFilterByRegion(region);
                  setIsOpen(!isOpen);
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
  handleFilterByRegion: PropType.func.isRequired,
};

export default Select;
