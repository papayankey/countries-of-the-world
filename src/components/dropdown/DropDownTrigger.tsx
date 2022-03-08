import { Flex } from "../../shared";
import Typography from "../../shared/Typography";
import { darkTheme } from "../../stitches/darkTheme";
import Caret from "../icons/Caret";

interface DropDownButtonProps {
  isOpen: boolean;
  handleIsOpen: () => void;
}

const DropDownTrigger: React.FC<DropDownButtonProps> = ({
  isOpen,
  handleIsOpen,
}) => {
  return (
    <Flex
      css={{
        backgroundColor: "$primary",
        boxShadow: "$1",
        [`.${darkTheme} &`]: {
          boxShadow: "$0",
        },
        width: "200px",
        py: "$1",
        px: "$3",
        alignItems: "center",
        justifyContent: "space-between",
        cursor: "pointer",
        mt: "$4",
        "@bp1": { height: "100%", mt: 0 },
      }}
      onClick={() => handleIsOpen()}
    >
      <Typography css={{ fontSize: "$2" }}>Filter by Region</Typography>
      <Caret isOpen={isOpen} />
    </Flex>
  );
};

export default DropDownTrigger;
