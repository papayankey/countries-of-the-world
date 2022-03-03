import { Link } from "react-router-dom";
import { Card } from "../../components";
import { ICountry } from "../../data/types";
import { Grid } from "../../shared";

interface ListProps {
  countries: ICountry[];
}

const List: React.FC<ListProps> = ({ countries }) => {
  return (
    <Grid
      as="section"
      css={{
        pt: "$7",
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        gridGap: "$6",
      }}
    >
      {countries.map((country, index) => {
        return (
          <Link key={index} to={`/countries/name/${country.name.official}`}>
            <Card country={country} />
          </Link>
        );
      })}
    </Grid>
  );
};

export default List;