import React from 'react';
import { Link } from 'react-router-dom';

import { Flex, Box, Text } from '../../shared';

function NavigateBack() {
  return (
    <Link to="/">
      <Flex
        justifyContent="center"
        width={['120px', '100px']}
        boxShadow="sm"
        bg="white"
        mt="4xl"
        px="lg"
        py="md"
        style={{ cursor: 'pointer' }}
      >
        <Box mr="sm">{'<--'}</Box>
        <Text>Back</Text>
      </Flex>
    </Link>
  );
}

export default NavigateBack;
