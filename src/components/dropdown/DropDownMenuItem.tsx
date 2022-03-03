import * as React from "react";
import { Region } from "../../data/types";
import { Typography } from "../../shared";

interface MenuItemProps {
  handleChangeRegion: (region: Region) => void;
  handleIsOpen: (value: boolean) => void;
  region: string;
}

const DropDownMenuItem: React.FC<MenuItemProps> = ({
  region,
  handleIsOpen,
  handleChangeRegion,
}) => {
  return (
    <Typography
      as="li"
      css={{
        listStyle: "none",
        py: "$2",
        pl: "$3",
        cursor: "pointer",
        letterSpacing: "1px",
        fontSize: "$2",
        fontWeight: "$semiBold",
        "&:hover": {
          backgroundColor: "$gray100",
        },
      }}
      onClick={() => {
        handleChangeRegion(Region[region]);
        handleIsOpen(false);
      }}
    >
      {region}
    </Typography>
  );
};

export default DropDownMenuItem;
