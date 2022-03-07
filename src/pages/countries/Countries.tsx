import Fuse from "fuse.js";
import * as React from "react";
import { ActivityIndicator } from "../../components";
import {
  API_ALL_COUNTRIES,
  APPDATA_KEY,
  CURRENT_PAGE_KEY,
  CURRENT_REGION_KEY,
  SEARCH_TERM_KEY,
} from "../../data/constants";
import { ICountry, Region } from "../../data/types";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { Box, Container, Typography } from "../../shared";
import Filter from "./Filter";
import List from "./List";
import Pagination from "./Pagination";

const Countries: React.FC = () => {
  const [data, setData] = useLocalStorage<ICountry[]>(APPDATA_KEY, []);
  const [searchTerm, setSearchTerm] = useLocalStorage<string>(
    SEARCH_TERM_KEY,
    ""
  );
  const [currentRegion, setCurrentRegion] = useLocalStorage<Region>(
    CURRENT_REGION_KEY,
    Region.ALL
  );
  const [page, setPage] = useLocalStorage<number>(CURRENT_PAGE_KEY, 1);
  const [hasError, setHasError] = React.useState(false);

  React.useEffect(() => {
    const fetchCountries = async () => {
      try {
        const result = await (await fetch(API_ALL_COUNTRIES)).json();
        setData(result);
      } catch (e) {
        setHasError(true);
      }
    };

    if (!data.length) fetchCountries();
  }, [data, setData]);

  // filter by region
  const filterByRegion = (region: Region): ICountry[] => {
    let augmentedData: ICountry[];
    if (region === Region.ALL) {
      augmentedData = data;
    } else {
      augmentedData = data.filter(
        (country) => country.region.toLowerCase() === region
      );
    }
    return augmentedData;
  };

  // filter by search term
  const filterBySearchTerm = (searchInput: string): ICountry[] => {
    const augmentedData: ICountry[] = [];
    let options: Fuse.IFuseOptions<ICountry> = {
      keys: ["name.common", "name.offical", "region", "subregion", "capital"],
    };

    let fuse = new Fuse<ICountry>(data, options);
    const result = fuse.search(searchInput);
    result.forEach((v) => augmentedData.push(v.item));
    return augmentedData;
  };

  const countriesPerPage = 12;
  let totalPages = 0;
  const paginate = (data: ICountry[]): ICountry[] => {
    totalPages = Math.ceil(data.length / countriesPerPage);
    const indexOfLast = page * countriesPerPage;
    const indexOfFirst = indexOfLast - countriesPerPage;
    return data.slice(indexOfFirst, indexOfLast);
  };

  const handleChangeRegion = (region: Region): void => {
    setPage(1);
    setSearchTerm("");
    setCurrentRegion(region);
  };

  const handleSearch = (text: string): void => {
    setPage(1);
    setSearchTerm(text);
  };

  const handlePrevious = () => {
    setPage((current) => {
      if (current > 1) {
        return current - 1;
      }
      return 1;
    });
  };

  const handleNext = () => {
    setPage((current) => {
      if (current < totalPages) {
        return current + 1;
      }
      return totalPages;
    });
  };

  // fetching data
  if (!data.length) {
    return (
      <Container>
        <Box css={{ mt: "$8" }}>
          <ActivityIndicator />
        </Box>
      </Container>
    );
  }

  // Error occurred
  if (hasError) {
    return (
      <Container>
        <Box css={{ mt: "$8" }}>
          <Typography>"Error has occurred fetching data..."</Typography>
        </Box>
      </Container>
    );
  }

  const getAppState = () => {
    return {
      currentPage: page,
      currentRegion,
      searchTerm,
      setPage,
      setCurrentRegion,
      setSearchTerm,
    };
  };

  return (
    <Container>
      <Filter
        handleSearch={handleSearch}
        handleChangeRegion={handleChangeRegion}
      />
      <List
        {...getAppState()}
        countries={paginate(
          searchTerm.length
            ? filterBySearchTerm(searchTerm)
            : filterByRegion(currentRegion)
        )}
      />
      <Pagination
        handlePreviousPage={handlePrevious}
        handleNextPage={handleNext}
        page={page ?? 1}
        totalPages={totalPages}
      />
    </Container>
  );
};

export default Countries;
