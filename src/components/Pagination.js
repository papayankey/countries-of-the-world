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
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: 'gray200',
    },
    '&:not(:last-of-type)': {
      borderRight: 'none',
    },
  })
);

function Pagination({ totalCountries, totalPerPage, paginate }) {
  const pages = [];

  for (let i = 1; i <= Math.ceil(totalCountries / totalPerPage); i++) {
    pages.push(i);
  }

  return (
    <Flex my="5xl" justifyContent="center" flexWrap="wrap">
      {pages.map(number => (
        <StyledButton
          key={number}
          onClick={() => paginate(number)}
          marginBottom={['md', null]}
        >
          <Text fontSize="lg" fontWeight="extraLight">
            {number}
          </Text>
        </StyledButton>
      ))}
    </Flex>
  );
}

Pagination.propType = {
  totalCountries: PropType.number.isRequired,
  totalPerPage: PropType.number.isRequired,
  paginate: PropType.func.isRequired,
};

export default Pagination;
