import { Link } from "react-router-dom";
import { Card } from "../../components";
import { ICountry, Region } from "../../data/types";
import { Grid } from "../../shared";

interface ListProps {
  countries: ICountry[];
  currentPage: number;
  currentRegion: Region;
  searchTerm: string;
  setPage: (value: number) => void;
  setCurrentRegion: (region: Region) => void;
  setSearchTerm: (searchTerm: string) => void;
}

const List: React.FC<ListProps> = ({
  countries,
  currentPage,
  currentRegion,
  searchTerm,
  setPage,
  setCurrentRegion,
  setSearchTerm,
}) => {
  const setApplicationStates = () => {
    setPage(currentPage);
    setCurrentRegion(currentRegion);
    setSearchTerm(searchTerm);
  };

  return (
    <Grid
      as="section"
      css={{
        pt: "$7",
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        gridGap: "$6",
      }}
    >
      {countries.map((country, index) => (
        <Link
          key={index}
          to={`/countries/name/${country.name.common}`}
          onClick={setApplicationStates}
        >
          <Card country={country} />
        </Link>
      ))}
    </Grid>
  );
};

export default List;
