import * as React from "react";
import { DropDown, Search } from "../../components";
import { Region } from "../../data/types";
import { Flex } from "../../shared";

interface FilterProps {
  handleSearch: (value: string) => void;
  handleChangeRegion: (region: Region) => void;
}

const Filter: React.FC<FilterProps> = ({
  handleSearch,
  handleChangeRegion,
}) => {
  return (
    <Flex
      css={{
        pt: "$7",
        justifyContent: "Space-between",
        flexWrap: "wrap",
      }}
    >
      <Search onSearch={handleSearch} />
      <DropDown onChangeRegion={handleChangeRegion} />
    </Flex>
  );
};

export default Filter;
