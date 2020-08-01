import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import css from '@styled-system/css';
import PropType from 'prop-types';

import { Box, Flex } from '../shared';

const Input = styled(Box)(
  css({
    fontSize: '3',
    width: '100%',
    boxShadow: 'sm',
    border: 'none',
    py: 'lg',
    px: '4xl',
    '&:focus': {
      outline: 'none',
    },
    '::placeholder': {
      fontSize: '3',
      color: 'gray300',
    },
  })
);

function SearchIcon() {
  return (
    <Box position="absolute" pl="md">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 512 512"
      >
        <path
          d="M221.09,64A157.09,157.09,0,1,0,378.18,221.09,157.1,157.1,0,0,0,221.09,64Z"
          style={{
            fill: 'none',
            stroke: 'hsl(0, 0%, 52%)',
            strokeMiterlimit: 10,
            strokeWidth: '32px',
          }}
        />
        <line
          x1="338.29"
          y1="338.29"
          x2="448"
          y2="448"
          style={{
            stroke: 'hsl(0, 0%, 52%)',
            strokeLinecap: 'round',
            strokeMiterlimit: 10,
            strokeWidth: '32px',
          }}
        />
      </svg>
    </Box>
  );
}

function ClearTextIcon({ clearText }) {
  return (
    <Box position="absolute" right="0" pr="md" onClick={() => clearText()}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 512 512"
      >
        <title>clear text</title>
        <path
          d="M448,256c0-106-86-192-192-192S64,150,64,256s86,192,192,192S448,362,448,256Z"
          style={{
            fill: 'none',
            stroke: 'hsl(0, 0%, 52%)',
            strokeMiterlimit: 10,
            strokeWidth: '32px',
          }}
        />
        <line
          x1="320"
          y1="320"
          x2="192"
          y2="192"
          style={{
            fill: 'none',
            stroke: 'hsl(0, 0%, 52%)',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '32px',
          }}
        />
        <line
          x1="192"
          y1="320"
          x2="320"
          y2="192"
          style={{
            fill: 'none',
            stroke: 'hsl(0, 0%, 52%)',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '32px',
          }}
        />
      </svg>
    </Box>
  );
}

ClearTextIcon.propType = {
  clearText: PropType.func,
};

function Search({ onSearch }) {
  const [text, setText] = useState('');
  const [isFocus, setIsFocus] = useState(false);
  const inputRef = useRef();

  function validateText(text) {
    const regexp = /^[a-zA-z]+$/gi;
    return regexp.test(text);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (validateText(text)) {
      onSearch(text);
    }
    setText('');
  }

  function clearText() {
    setText('');
    inputRef.current.focus();
    setIsFocus(true);
  }

  return (
    <Flex
      position="relative"
      alignItems="center"
      width={['100%', '250px', '400px']}
    >
      <SearchIcon />
      <form onSubmit={handleSubmit} style={{ width: '100%' }}>
        <Input
          as="input"
          type="text"
          name="search"
          title="Search Term: can be partial or full"
          placeholder="Search by name, region, capital ..."
          value={text}
          onChange={e => setText(e.target.value.trim().toLowerCase())}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          ref={inputRef}
        />
      </form>
      {(isFocus || text.length > 0) && <ClearTextIcon clearText={clearText} />}
    </Flex>
  );
}

Search.propType = {
  onSearch: PropType.func,
};

export default Search;
