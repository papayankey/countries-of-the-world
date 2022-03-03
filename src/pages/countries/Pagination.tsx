import * as React from "react";
import { Arrow } from "../../components/icons";
import { Box, Button, Flex, Typography } from "../../shared";
import { css } from "../../stitches";

// classnames
const RightArrow = css({ transform: "rotate(180deg)" });

interface PaginationProps {
  page: number;
  totalPages: number;
  handlePreviousPage: () => void;
  handleNextPage: () => void;
}

const Pagination: React.FC<PaginationProps> = ({
  page,
  totalPages,
  handleNextPage,
  handlePreviousPage,
}) => {
  return (
    <Flex
      css={{
        py: "$8",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Flex>
        <Button
          css={{
            mr: "$4",
            bgcolor: page === 1 && "initial",
          }}
          disabled={page === 1}
          onClick={() => handlePreviousPage()}
        >
          <Flex css={{ alignItems: "center" }}>
            <Arrow />
            <Typography css={{ ml: "$1" }}>Previous</Typography>
          </Flex>
        </Button>
        <Button
          css={{
            bgcolor: page === totalPages && "initial",
          }}
          disabled={page === totalPages}
          onClick={() => handleNextPage()}
        >
          <Flex css={{ alignItems: "center" }}>
            <Typography css={{ mr: "$1" }}>Next</Typography>
            <Arrow className={RightArrow()} />
          </Flex>
        </Button>
      </Flex>
      <Box>
        <Typography as="span" css={{ fontWeight: "$bold" }}>
          {page}
        </Typography>
        <Typography as="span" css={{ px: "$1" }}>
          /
        </Typography>
        <Typography as="span">{totalPages}</Typography>
      </Box>
    </Flex>
  );
};

export default Pagination;
