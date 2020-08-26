import React, { useContext } from 'react';
import styled from 'styled-components';
import css from '@styled-system/css';
import PropTypes from 'prop-types';

import { Box, Flex, Text } from '../shared';
import { ThemeContext } from '../components';

const StyledButton = styled(Box)(({ isDark }) =>
  css({
    outline: 'none',
    appearance: 'none',
    paddingY: 'md',
    paddingX: 'lg',
    backgroundColor: isDark ? 'blue100' : 'white',
    borderColor: isDark ? 'blue200' : 'gray200',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderRadius: 'none',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: isDark ? 'hsl(209, 23%, 28%)' : 'gray200',
    },
    '&:not(:last-of-type)': {
      borderRight: 'none',
    },
  })
);

function Pagination({ data, totalPages, currentPage, onChangePage }) {
  const isDark = useContext(ThemeContext);
  const pages = [];

  for (let i = 1; i <= Math.ceil(data / totalPages); i++) {
    pages.push(i);
  }

  return (
    <Flex my="5xl" justifyContent="center" flexWrap="wrap">
      {pages.map(number => (
        <StyledButton
          isDark={isDark}
          key={number}
          onClick={() => onChangePage(number)}
          marginBottom={['md', null]}
          style={{
            backgroundColor:
              currentPage === number
                ? isDark
                  ? 'hsl(209, 23%, 28%)'
                  : 'hsl(0, 0%, 90%)'
                : null,
            borderColor:
              currentPage === number
                ? isDark
                  ? 'hsl(209, 23%, 28%)'
                  : null
                : null,
          }}
        >
          <Text
            fontSize="lg"
            fontWeight="extraLight"
            color={isDark ? 'white' : null}
          >
            {number}
          </Text>
        </StyledButton>
      ))}
    </Flex>
  );
}

Pagination.propTypes = {
  data: PropTypes.number,
  totalPages: PropTypes.number,
  currentPage: PropTypes.number,
  changePage: PropTypes.func,
};

export default Pagination;
