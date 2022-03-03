import * as React from "react";
import { Region } from "../../data/types";
import { Box } from "../../shared";
import DropDownMenu from "./DropDownMenu";
import DropDownMenuItem from "./DropDownMenuItem";
import DropDownTrigger from "./DropDownTrigger";

// regions
const Regions = ["ALL", "AFRICA", "AMERICAS", "ASIA", "EUROPE", "OCEANIA"];

interface SelectProps {
  onChangeRegion: (region: Region) => void;
}

const DropDown: React.FC<SelectProps> = ({ onChangeRegion }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleChangeRegion = (region: Region) => {
    onChangeRegion(region);
  };

  return (
    <Box css={{ position: "relative", mt: "$3" }}>
      <DropDownTrigger isOpen={isOpen} handleIsOpen={handleIsOpen} />
      <DropDownMenu isOpen={isOpen}>
        {Regions.map((region, index) => (
          <DropDownMenuItem
            key={index}
            region={region}
            handleIsOpen={handleIsOpen}
            handleChangeRegion={handleChangeRegion}
          />
        ))}
      </DropDownMenu>
    </Box>
  );
};

export default DropDown;
