import React from 'react';
import PropType from 'prop-types';

import { Box, Text } from '../shared';
import { useNumberFormat } from '../hooks';

function Card({ country }) {
  let { flag, name, population, region, capital } = country;
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
      <Box position="relative" p="30%" bg="gray300" borderRadius="none">
        <Box
          as="img"
          src={flag}
          alt={name + ' flag'}
          position="absolute"
          top="0"
          left="0"
          width="100%"
          height="100%"
          borderRadius="none"
          style={{ objectFit: 'cover' }}
        />
      </Box>
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
  country: PropType.object.isRequired,
};

export default Card;
