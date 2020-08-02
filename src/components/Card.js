import React, { useContext } from 'react';
import PropType from 'prop-types';

import { ThemeContext } from '../components';
import { Box, Text } from '../shared';
import { useNumberFormat } from '../hooks';

function Card({ country }) {
  const isDark = useContext(ThemeContext);
  let { flag, name, population, region, capital } = country;
  population = useNumberFormat(population);

  return (
    <Box
      bg={isDark ? 'blue100' : 'white'}
      boxShadow={isDark ? '0 0 4px 2px hsl(207, 26%, 17%)' : 'sm'}
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
        <Text
          as="h2"
          fontWeight="extraBold"
          fontSize="6"
          color={isDark ? 'white' : null}
        >
          {name}
        </Text>
        <Box mt="2xl">
          <Box>
            <Text
              as="span"
              fontWeight="semiBold"
              color={isDark ? 'hsl(0, 0%, 98%)' : null}
            >
              Population:{' '}
            </Text>
            <Text
              as="span"
              fontWeight="extraLight"
              color={isDark ? 'white' : null}
            >
              {population}
            </Text>
          </Box>
          <Box mt="md"></Box>
          <Box>
            <Text
              as="span"
              fontWeight="semiBold"
              color={isDark ? 'hsl(0, 0%, 98%)' : null}
            >
              Region:{' '}
            </Text>
            <Text
              as="span"
              fontWeight="extraLight"
              color={isDark ? 'white' : null}
            >
              {region}
            </Text>
          </Box>
          <Box my="md"></Box>
          <Box>
            <Text
              as="span"
              fontWeight="semiBold"
              color={isDark ? 'hsl(0, 0%, 98%)' : null}
            >
              Capital:{' '}
            </Text>
            <Text
              as="span"
              fontWeight="extraLight"
              color={isDark ? 'white' : null}
            >
              {capital}
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

Card.propType = {
  country: PropType.object.isRequired,
};

export default Card;
