import React, { useMemo } from 'react';
import styled from 'styled-components';
import css from '@styled-system/css';
import PropType from 'prop-types';

import { useNumberFormat } from '../../hooks/useNumberFormat';

import { Grid, Box, Text, Flex } from '../../shared';
import { useQueryBorderName } from '../../hooks/useQueryBorderName';

const StyledText = styled(Text)(
  css({
    fontWeight: 'semiBold',
    '& + &': {
      marginTop: 'md',
    },
  })
);

const Span = styled(Text).attrs(() => ({
  as: 'span',
}))(
  css({
    fontWeight: 'extraLight',
    '& + &': {
      marginLeft: 'md',
    },
  })
);

const StyledBox = styled(Box)(
  css({
    backgroundColor: 'white',
    boxShadow: 'sm',
    paddingX: 'lg',
    paddingY: 'sm',
    marginBottom: 'md',
    marginRight: 'md',
  })
);

export function Detail({ country }) {
  let {
    flag,
    name,
    population,
    nativeName,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    languages,
    borders,
  } = country;

  population = useNumberFormat(population);
  borders = useQueryBorderName(borders);

  currencies = useMemo(() => {
    return currencies.reduce(
      (accum, current) => (accum = [...accum, current.name]),
      []
    );
  }, [currencies]);

  languages = useMemo(() => {
    return languages.reduce(
      (accum, current) => (accum = [...accum, current.name]),
      []
    );
  }, [languages]);

  return (
    <Grid
      gridTemplateColumns={['1fr', null, '1fr 1fr']}
      gridColumnGap={[0, null, '60px']}
    >
      <Box position="relative" p={['40%', '35%', '30%']} mt="5xl" bg="gray200">
        <Box
          as="img"
          src={flag}
          position="absolute"
          top="0"
          left="0"
          width="100%"
          height="100%"
          style={{ objectFit: 'cover' }}
        />
      </Box>
      <Box width="100%" mt={[0, 0, '5xl']}>
        <Flex
          flexDirection="column"
          height="100%"
          justifyContent={[null, null, 'center']}
        >
          <Grid mt={[0, '4xl', 0]} gridTemplateColumns={['1fr', '1fr 1fr']}>
            <Box mt={['3xl', null, 0]} gridArea="1/1/2/2">
              <Text as="h2" fontSize="5" fontWeight="extraBold">
                {name}
              </Text>
              <Box mt="2xl">
                <StyledText>
                  Native Name: <Span>{nativeName}</Span>
                </StyledText>
                <StyledText>
                  Population: <Span>{population}</Span>
                </StyledText>
                <StyledText>
                  Region: <Span>{region}</Span>
                </StyledText>
                <StyledText>
                  Sub Region: <Span>{subregion}</Span>
                </StyledText>
                <StyledText>
                  Capital: <Span>{capital}</Span>
                </StyledText>
              </Box>
            </Box>
            <Box
              mt={['3xl', null, 0]}
              ml={[0, 'xl', 'md']}
              pt={[0, '4xl']}
              gridArea={['2/1/3/2', '1/2/2/3']}
            >
              <StyledText>
                Top Level Domain:{' '}
                {topLevelDomain.map((domain, idx) => (
                  <Span key={idx}>{domain}</Span>
                ))}
              </StyledText>
              <StyledText>
                Currencies:{' '}
                {currencies.map((currency, idx) => (
                  <Span key={idx}>{currency}</Span>
                ))}
              </StyledText>
              <StyledText>
                Languages:{' '}
                {languages.map((language, idx) => (
                  <Span key={idx}>{language}</Span>
                ))}
              </StyledText>
            </Box>
          </Grid>
          <Box mt="4xl">
            <Flex
              flexDirection={['column', 'row']}
              alignItems={[null, 'baseline']}
            >
              <Flex flex="auto 0 0">
                <StyledText>Border Countries: </StyledText>
              </Flex>
              <Flex mt={['lg', 0]} ml={[0, 'lg']} flexWrap="wrap">
                {borders.map((border, idx) => (
                  <StyledBox key={idx}>{border}</StyledBox>
                ))}
              </Flex>
            </Flex>
          </Box>
        </Flex>
      </Box>
      <Box mt={['4xl', 0]}></Box>
    </Grid>
  );
}

Detail.propType = {
  country: PropType.object.isRequired,
};
