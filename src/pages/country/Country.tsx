import * as React from "react";
import { Link, useParams } from "react-router-dom";
import { ActivityIndicator } from "../../components";
import { Arrow } from "../../components/icons";
import { APPDATA_KEY } from "../../data/constants";
import { ICountry } from "../../data/types";
import { Box, Button, Container, Flex, Typography } from "../../shared";
import Detail from "./Detail";

const Country: React.FC = () => {
  const [country, setCountry] = React.useState<ICountry[]>([]);
  const { name } = useParams();
  const nameRef = React.useRef<string>(name as string);

  React.useEffect(() => {
    const item = window.localStorage.getItem(APPDATA_KEY);
    if (item) {
      const countries: ICountry[] = JSON.parse(item);
      const result = countries.filter((c) => {
        let n = nameRef.current;
        if (
          c.name.official.toLowerCase().includes(n.toLowerCase()) ||
          c.name.common.toLowerCase().includes(n.toLowerCase())
        ) {
          return true;
        }
        return false;
      });
      setCountry(result);
    }
  }, [nameRef]);

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
      <Link to={"/countries"}>
        <Button css={{ mt: "$7" }}>
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
