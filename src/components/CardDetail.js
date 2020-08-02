import React, { useMemo, useContext } from 'react';
import styled from 'styled-components';
import css from '@styled-system/css';
import PropType from 'prop-types';

import { useNumberFormat, useQueryBorderName } from '../hooks';
import { Grid, Box, Text, Flex } from '../shared';
import { ThemeContext } from '../components';

const StyledText = styled(Text)(({ isDark }) =>
  css({
    color: isDark ? 'hsl(0, 0%, 98%)' : null,
    fontWeight: 'semiBold',
    '& + &': {
      marginTop: 'md',
    },
  })
);

const Span = styled(Text).attrs(() => ({
  as: 'span',
}))(({ isDark }) =>
  css({
    color: isDark ? 'white' : null,
    fontWeight: 'extraLight',
    '& + &': {
      marginLeft: 'md',
    },
  })
);

const StyledBox = styled(Box)(({ isDark }) =>
  css({
    boxShadow: isDark ? '0 0 4px 2px hsl(207, 26%, 17%)' : 'sm',
    bg: isDark ? 'blue100' : 'white',
    paddingX: 'md',
    paddingY: 'sm',
    marginBottom: 'md',
    marginRight: 'md',
  })
);

function CardDetail({ country }) {
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
  const isDark = useContext(ThemeContext);

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
      <Box
        position="relative"
        p={['40%', '35%', '30%']}
        mt="5xl"
        bg={isDark ? 'blue300' : ' gray100'}
        boxShadow={isDark ? '0 0 4px 4px hsl(207, 26%, 17%)' : 'md'}
      >
        <Box
          as="img"
          src={flag}
          alt={name + ' flag'}
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
              <Text
                as="h2"
                fontSize="7"
                fontWeight="extraBold"
                color={isDark ? 'white' : null}
              >
                {name}
              </Text>
              <Box mt="2xl">
                <StyledText isDark={isDark}>
                  Native Name: <Span isDark={isDark}>{nativeName}</Span>
                </StyledText>
                <StyledText isDark={isDark}>
                  Population: <Span isDark={isDark}>{population}</Span>
                </StyledText>
                <StyledText isDark={isDark}>
                  Region: <Span isDark={isDark}>{region}</Span>
                </StyledText>
                <StyledText isDark={isDark}>
                  Sub Region: <Span isDark={isDark}>{subregion}</Span>
                </StyledText>
                <StyledText isDark={isDark}>
                  Capital: <Span isDark={isDark}>{capital}</Span>
                </StyledText>
              </Box>
            </Box>
            <Box
              mt={['3xl', null, 0]}
              ml={[0, 'xl', 'md']}
              pt={[0, '4xl']}
              gridArea={['2/1/3/2', '1/2/2/3']}
            >
              <StyledText isDark={isDark}>
                Top Level Domain:{' '}
                {topLevelDomain.map((domain, idx) => (
                  <Span key={idx} isDark={isDark}>
                    {domain}
                  </Span>
                ))}
              </StyledText>
              <StyledText isDark={isDark}>
                Currencies:{' '}
                {currencies.map((currency, idx) => (
                  <Span key={idx} isDark={isDark}>
                    {currency}
                  </Span>
                ))}
              </StyledText>
              <StyledText isDark={isDark}>
                Languages:{' '}
                {languages.map((language, idx) => (
                  <Span key={idx} isDark={isDark}>
                    {idx < languages.length - 1 ? `${language},` : language}
                  </Span>
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
                <StyledText isDark={isDark}>Border Countries: </StyledText>
              </Flex>
              <Flex mt={['lg', 0]} ml={[0, 'lg']} flexWrap="wrap">
                {borders.length > 0 ? (
                  borders.map((border, idx) => (
                    <StyledBox key={idx} isDark={isDark}>
                      <Text
                        color={isDark ? 'hsl(0, 0%, 98%)' : null}
                        fontWeight="extraLight"
                      >
                        {border}
                      </Text>
                    </StyledBox>
                  ))
                ) : (
                  <Text
                    color={isDark ? 'hsl(0, 0%, 98%)' : null}
                    fontWeight="extraLight"
                  >
                    None
                  </Text>
                )}
              </Flex>
            </Flex>
          </Box>
        </Flex>
      </Box>
      <Box mt={['4xl', null, 0]}></Box>
    </Grid>
  );
}

CardDetail.propType = {
  country: PropType.object.isRequired,
};

export default CardDetail;
