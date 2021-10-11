import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { CardDetail, BackButton, ActivityIndicator } from "../components";
import { Container, Box } from "../shared";

function Country() {
  const [data, setData] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    async function queryCountry() {
      const response = await fetch(
        `https://restcountries.com/v3.1/name/${name}`
      );
      const json = await response.json();
      setData(json);
    }
    queryCountry();
  }, [name]);

  const isLoading = data.length === 0;

  return (
    <Container px={["xl", 0]}>
      <BackButton />
      {isLoading && (
        <Box mt="4xl">
          <ActivityIndicator />
        </Box>
      )}
      {data && data.length > 0 && <CardDetail country={data[0]} />}
    </Container>
  );
}

export default Country;
