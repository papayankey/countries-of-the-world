import React from 'react';
import PropType from 'prop-types';

import { Box, Text } from '../../shared';
import { useNumberFormat } from '../../hooks/useNumberFormat';

export function Card({ data }) {
  let { name, population, region, capital } = data;
  population = useNumberFormat(population);

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
          {name}
        </Text>
        <Box mt="2xl">
          <Text fontWeight="extraBold">
            Population: <Text as="span">{population}</Text>
          </Text>
          <Box mt="md"></Box>
          <Text fontWeight="extraBold">
            Region: <Text as="span">{region}</Text>
          </Text>
          <Box my="md"></Box>
          <Text fontWeight="extraBold">
            Capital: <Text as="span">{capital}</Text>
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

Card.propType = {
  data: PropType.object.isRequired,
};
