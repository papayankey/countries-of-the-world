import * as React from "react";
import { Link, useParams } from "react-router-dom";
import { ActivityIndicator } from "../../components";
import { Arrow } from "../../components/icons";
import { JSON_KEY } from "../../data/constants";
import { ICountry } from "../../data/types";
import { Box, Button, Container, Flex, Typography } from "../../shared";
import Detail from "./Detail";

const Country: React.FC = () => {
  const [country, setCountry] = React.useState<ICountry[]>([]);
  const { name } = useParams();

  React.useEffect(() => {
    const item = window.localStorage.getItem(JSON_KEY);
    if (item) {
      const countries: ICountry[] = JSON.parse(item);
      const result = countries.filter((c) => c.name.official === name);
      console.log("result: ", result);
      setCountry(result);
    }
  }, [name]);

  if (!country.length) {
    return (
      <Container>
        <Box css={{ mt: "$8" }}>
          <ActivityIndicator />
        </Box>
      </Container>
    );
  }

  return (
    <Container css={{ "@bp1": { px: "$5" }, "@bp2": { px: 0 } }}>
      <Link to={"/countries"} reloadDocument={true}>
        <Button
          css={{
            mt: "$7",
          }}
        >
          <Flex css={{ alignItems: "center" }}>
            <Arrow />
            <Typography css={{ ml: "$2" }}>Back</Typography>
          </Flex>
        </Button>
      </Link>
      <Detail country={country[0]} />
    </Container>
  );
};

export default Country;
