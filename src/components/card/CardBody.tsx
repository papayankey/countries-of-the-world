import * as React from "react";
import { ICountry } from "../../data/types";
import { Box, Typography } from "../../shared";
import { formatNumber } from "../../utils";

interface CardBodyProps {
  country: ICountry;
}

const CardBody: React.FC<CardBodyProps> = ({ country }) => {
  const { name, population, region, capital } = country;

  return (
    <Box css={{ px: "$4", py: "$7", color: "$black" }}>
      <Typography
        as="h3"
        css={{
          fontWeight: "$bold",
          fontSize: "$5",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {name.common}
      </Typography>
      <Box css={{ mt: "$3" }}>
        <Typography as="span" css={{ fontWeight: "$semiBold" }}>
          Population:{" "}
        </Typography>
        <Typography as="span" css={{ fontWeight: "$light" }}>
          {formatNumber(population)}
        </Typography>
      </Box>
      <Box>
        <Typography as="span" css={{ fontWeight: "$semiBold" }}>
          Region:{" "}
        </Typography>
        <Typography as="span" css={{ fontWeight: "$light" }}>
          {region}
        </Typography>
      </Box>
      <Box
        css={{
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        <Typography as="span" css={{ fontWeight: "$semiBold" }}>
          Capital:{" "}
        </Typography>
        <Typography as="span" css={{ fontWeight: "$light" }}>
          {Array.isArray(capital) ? capital[0] : capital}
        </Typography>
      </Box>
    </Box>
  );
};

export default CardBody;
