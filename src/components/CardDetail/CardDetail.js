import React, { useMemo } from 'react';
import styled from 'styled-components';
import css from '@styled-system/css';

import { useNumberFormat } from '../../hooks/useNumberFormat';

import { Grid, Box, Text, Flex } from '../../shared';
import { data } from '../../data';

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
    '& + &': {
      marginLeft: 'md',
    },
    '@media and (max-width: "600px")': {
      '&:last-child': {
        marginLeft: 0,
      },
    },
  })
);

function CardDetail() {
  let {
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
  } = data[0];

  population = useNumberFormat(population);

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
      <Box
        position="relative"
        p={['40%', '35%', '30%']}
        mt="5xl"
        bg="gray200"
      ></Box>
      <Box width="100%" mt={[0, 0, '5xl']}>
        <Flex
          flexDirection="column"
          height="100%"
          justifyContent={[null, null, 'center']}
        >
          <Grid mt={[0, '4xl', 0]} gridTemplateColumns={['1fr', '1fr 1fr']}>
            <Box mt={['3xl', null, 0]} gridArea="1/1/2/2">
              <Text as="h2" fontSize="4" fontWeight="extraBold">
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
                {topLevelDomain &&
                  topLevelDomain.map((domain, idx) => (
                    <Span key={idx}>{domain}</Span>
                  ))}
              </StyledText>
              <StyledText>
                Currencies:{' '}
                {currencies &&
                  currencies.map((currency, idx) => (
                    <Span key={idx}>{currency}</Span>
                  ))}
              </StyledText>
              <StyledText>
                Languages:{' '}
                {languages &&
                  languages.map((language, idx) => (
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
              <StyledText>Border Countries: </StyledText>
              <Flex mt={['lg', 0]} ml={[0, 'md']} flexWrap="wrap">
                {borders &&
                  borders.map((border, idx) => (
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

// CardDetail.propType = {
//   country: PropType.array.isRequired,
// };

export default CardDetail;
