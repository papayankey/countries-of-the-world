import * as React from "react";
import { ICountry } from "../../data/types";
import { Box } from "../../shared";
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
        bg: "white",
        boxShadow: "$1",
        borderRadius: "$2",
        overflow: "hidden",
        transition: "transform 150ms linear",
        bgcolor: "$white",
        "&:hover": {
          transform: "translate(0, -10px)",
          boxShadow: "$3",
        },
      }}
    >
      <CardImage svg={country.flags.svg} common={country.name.common} />
      <CardBody country={country} />
    </Box>
  );
};

export default Card;
