import React from 'react';

import { Box, Text } from '../../shared';

export function Card() {
  return (
    <Box
      bg="white"
      boxShadow="sm"
      borderRadius="md"
      overflow="hidden"
      width={['80%', 'auto']}
      mx={['auto', 0]}
    >
      <Box position="relative" p="30%" bg="gray300" borderRadius="none"></Box>
      <Box px="xl" py="4xl">
        <Text as="h2" fontWeight="Bolder" fontSize="6">
          Germany
        </Text>
        <Box mt="2xl">
          <Text fontWeight="extraBold">
            Population: <Text as="span">81, 770, 900</Text>
          </Text>
          <Box mt="md"></Box>
          <Text fontWeight="extraBold">
            Region: <Text as="span">Europe</Text>
          </Text>
          <Box my="md"></Box>
          <Text fontWeight="extraBold">
            Capital: <Text as="span">Berlin</Text>
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
