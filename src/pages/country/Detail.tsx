import * as React from "react";
import CardImage from "../../components/card/CardImage";
import { ICountry } from "../../data/types";
import { Box, Button, Flex, Grid, Typography } from "../../shared";
import { css } from "../../stitches";
import { formatNumber, getBorderNames } from "../../utils";

const KeyStyles = css({
  fontWeight: "$semiBold",
});

interface DetailProps {
  country: ICountry;
}

const Detail: React.FC<DetailProps> = ({ country }) => {
  return (
    <Grid
      css={{
        mt: "$7",
        gridTemplateColumns: "1fr",
        gridColumnGap: 0,
        "@bp2": {
          gridTemplateColumns: "1fr 1fr",
          gridColumnGap: "$8",
        },
      }}
    >
      <CardImage svg={country.flags.svg} common={country.name.common} />
      <Box css={{ pt: "$7", pb: "$7", "@bp2": { pt: 0, pb: 0 } }}>
        <Typography as="h2" css={{ fontSize: "$5" }}>
          {country.name.common}
        </Typography>
        <Grid css={{ mt: "$6" }}>
          <Box>
            <Typography>
              <span className={KeyStyles()}>Native Name:</span>{" "}
              <span>{country.name.official}</span>
            </Typography>
            <Typography>
              <span className={KeyStyles()}>Population:</span>{" "}
              <span>{formatNumber(country.population)}</span>
            </Typography>
            <Typography>
              <span className={KeyStyles()}>Region:</span>{" "}
              <span>{country.region}</span>
            </Typography>
            <Typography>
              <span className={KeyStyles()}>Sub Region:</span>{" "}
              <span>{country.subregion}</span>
            </Typography>
            <Typography>
              <span className={KeyStyles()}>Capital:</span>{" "}
              <span>{country.capital}</span>
            </Typography>
          </Box>
          <Box css={{ mt: "$6" }}>
            <Typography>
              <span className={KeyStyles()}>Top Level Domain:</span>{" "}
              <span>{country.tld[0]}</span>
            </Typography>
            <Typography>
              <span className={KeyStyles()}>Currencies:</span>{" "}
              {country.currencies &&
                Object.values(country.currencies)
                  .map((v) => v.name)
                  .map((currency, index) => (
                    <span key={index}>{currency}, </span>
                  ))}
            </Typography>
            <Typography>
              <span className={KeyStyles()}>Languages: </span>
              {country.languages &&
                Object.values(country.languages).map((language, index) => (
                  <span key={index}>{language}, </span>
                ))}
            </Typography>
          </Box>
        </Grid>
        <Flex css={{ mt: "$7", flexDirection: "column" }}>
          {country.borders && (
            <Typography as="h4">Border Countries: </Typography>
          )}
          <Flex css={{ mt: "$4", flexWrap: "wrap" }}>
            {country.borders &&
              getBorderNames(country).map((item, index) => {
                return (
                  <Button
                    key={index}
                    variant="secondary"
                    css={{
                      mr: "$2",
                      mb: "$2",
                    }}
                  >
                    {item}
                  </Button>
                );
              })}
          </Flex>
        </Flex>
      </Box>
    </Grid>
  );
};

export default Detail;
