import React, { useState, useContext, useRef, useEffect } from 'react';
import styled from 'styled-components';
import css from '@styled-system/css';
import PropTypes from 'prop-types';

import { ThemeContext } from '../components';
import { Box, Text, Flex } from '../shared';
import { useNumberFormat } from '../hooks';
import ActivityIndicator from './ActivityIndicator';

const Base = styled(Box)(({ isDark }) =>
  css({
    position: 'relative',
    bg: isDark ? 'blue100' : 'white',
    boxShadow: isDark ? '0 0 4px 2px hsl(207, 26%, 17%)' : 'sm',
    borderRadius: 'md',
    overflow: 'hidden',
    width: ['80%', 'auto'],
    mx: ['auto', 0],
    transition: 'transform 150ms linear',
    ':hover': {
      transform: 'scale(1.025)',
      boxShadow: isDark ? '0 0 6px 4px hsl(207, 26%, 17%)' : 'md',
    },
  })
);

function Card({ country }) {
  let { flag, name, population, region, capital } = country;
  const [imageIsLoading, setImageIsLoading] = useState(true);
  const isDark = useContext(ThemeContext);
  population = useNumberFormat(population);
  const imageRef = useRef();

  useEffect(() => {
    const isLoaded = imageRef.current.complete;
    if (isLoaded) {
      setImageIsLoading(false);
    }
  }, [setImageIsLoading, name]);

  return (
    <Base isDark={isDark}>
      <Box
        position="relative"
        p="30%"
        bg={isDark ? '' : 'hsl(0, 0%, 98%)'}
        borderRadius="none"
      >
        {imageIsLoading && (
          <Flex w="100%" h="100%" justifyContent="center" alignItems="center">
            <ActivityIndicator />
          </Flex>
        )}
        <Box
          as="img"
          src={flag}
          alt={name + ' flag'}
          ref={imageRef}
          position="absolute"
          top="0"
          left="0"
          width="100%"
          height="100%"
          borderRadius="none"
          style={{
            objectFit: 'cover',
            textIndent: '-9999px',
          }}
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
    </Base>
  );
}

Card.propTypes = {
  country: PropTypes.object.isRequired,
};

export default Card;
