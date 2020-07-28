import React from 'react';
import styled from 'styled-components';
import css from '@styled-system/css';
import PropType from 'prop-types';

import { Box, Flex, Text } from '../shared';

const StyledButton = styled(Box).attrs(() => ({
  as: 'button',
}))(
  css({
    appearance: 'none',
    paddingY: 'md',
    paddingX: 'lg',
    backgroundColor: 'white',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'gray200',
    borderRadius: 'none',
  })
);

function Pagination({ totalCountries, pageNumber, paginate }) {
  const handlePrevPage = () => {
    if (pageNumber > 1) {
      paginate(pageNumber - 1);
    }
  };

  const handleNextPage = () => {
    if (pageNumber < totalCountries) {
      paginate(pageNumber + 1);
    }
  };

  return (
    <Flex my="5xl" justifyContent="center">
      <StyledButton
        style={{ borderRight: 'none' }}
        onClick={handlePrevPage}
        disabled={pageNumber === 1 ? 'true' : null}
      >
        <Text
          fontSize="lg"
          fontWeight="extraLight"
          color={pageNumber === 1 ? 'gray200' : null}
        >
          Previous
        </Text>
      </StyledButton>
      <StyledButton
        onClick={handleNextPage}
        disabled={pageNumber === totalCountries ? 'true' : null}
      >
        <Text
          fontSize="lg"
          fontWeight="extraLight"
          color={pageNumber === totalCountries ? 'gray200' : null}
        >
          Next
        </Text>
      </StyledButton>
    </Flex>
  );
}

Pagination.propType = {
  currentPage: PropType.number.isRequired,
  paginate: PropType.func.isRequired,
};

export default Pagination;
