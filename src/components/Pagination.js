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

function Pagination({ data, totalPages, currentPage, onChangePage }) {
  const pages = [];

  for (let i = 1; i <= Math.ceil(data / totalPages); i++) {
    pages.push(i);
  }

  return (
    <Flex my="5xl" justifyContent="center" flexWrap="wrap">
      {pages.map(number => (
        <StyledButton
          key={number}
          onClick={() => onChangePage(number)}
          marginBottom={['md', null]}
          style={{
            backgroundColor: currentPage === number ? 'hsl(0, 0%, 90%)' : null,
          }}
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
  data: PropType.number.isRequired,
  totalPages: PropType.number.isRequired,
  currentPage: PropType.number.isRequired,
  changePage: PropType.func.isRequired,
};

export default Pagination;
