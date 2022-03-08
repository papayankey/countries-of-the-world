import * as React from "react";
import { ICountry } from "../../data/types";
import { Box } from "../../shared";
import { darkTheme } from "../../stitches/darkTheme";
import CardBody from "./CardBody";
import CardImage from "./CardImage";

type CardProps = {
  country: ICountry;
};

const Card: React.FC<CardProps> = ({ country }) => {
  return (
    <Box
      css={{
        position: "relative",
        boxShadow: "$1",
        [`.${darkTheme} &`]: {
          boxShadow: "$0"
        },
        borderRadius: "$2",
        overflow: "hidden",
        transition: "transform 150ms linear",
        bgcolor: "$primary",
        "&:hover": {
          transform: "translate(0, -10px)",
          boxShadow: "$2",
        },
      }}
    >
      <CardImage svg={country.flags.svg} common={country.name.common} />
      <CardBody country={country} />
    </Box>
  );
};

export default Card;
