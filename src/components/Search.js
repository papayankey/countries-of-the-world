import React, { useState, useRef, useContext, useEffect } from 'react';
import styled from 'styled-components';
import css from '@styled-system/css';
import PropType from 'prop-types';

import { Box, Flex } from '../shared';
import { ThemeContext } from '../components';

const Input = styled(Box)(({ isDark }) =>
  css({
    fontSize: '3',
    color: isDark ? 'gray100' : null,
    width: '100%',
    boxShadow: isDark ? '0 0 4px 2px hsl(207, 26%, 17%)' : 'sm',
    bg: isDark ? 'blue100' : 'white',
    border: 'none',
    py: 'md',
    px: '4xl',
    '&:focus': {
      outline: 'none',
    },
    '::placeholder': {
      fontSize: '3',
      color: isDark ? 'gray200' : 'gray300',
    },
  })
);

function SearchIcon({ isDark }) {
  return (
    <Box
      position="absolute"
      pl="md"
      height="100%"
      display="flex"
      style={{ alignItems: 'center' }}
    >
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
            stroke: isDark ? 'hsl(0, 0%, 98%)' : 'hsl(0, 0%, 52%)',
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
            stroke: isDark ? 'hsl(0, 0%, 98%)' : 'hsl(0, 0%, 52%)',
            strokeLinecap: 'round',
            strokeMiterlimit: 10,
            strokeWidth: '32px',
          }}
        />
      </svg>
    </Box>
  );
}

function ClearTextIcon({ clearText, isDark }) {
  return (
    <Box
      position="absolute"
      right="0"
      pr="md"
      height="100%"
      display="flex"
      style={{ alignItems: 'center' }}
      onClick={() => clearText()}
    >
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
            stroke: isDark ? 'hsl(0, 0%, 98%)' : 'hsl(0, 0%, 52%)',
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
            stroke: isDark ? 'hsl(0, 0%, 98%)' : 'hsl(0, 0%, 52%)',
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
            stroke: isDark ? 'hsl(0, 0%, 98%)' : 'hsl(0, 0%, 52%)',
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
  const isDark = useContext(ThemeContext);
  const [text, setText] = useState('');
  const [isFocus, setIsFocus] = useState(false);
  const inputRef = useRef();

  useEffect(() => {
    function activateSearchInput() {
      inputRef.current.focus();
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }

    window.addEventListener('keyup', activateSearchInput);
    return () => window.removeEventListener('keyup', activateSearchInput);
  }, []);

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
      width={['100%', '300px', '450px']}
    >
      <SearchIcon isDark={isDark} />
      <form onSubmit={handleSubmit} style={{ width: '100%' }}>
        <Input
          isDark={isDark}
          as="input"
          type="text"
          name="search"
          title="Search term: name, capital and region"
          placeholder="Search for countries ..."
          value={text}
          onChange={e => setText(e.target.value.trim().toLowerCase())}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          ref={inputRef}
        />
      </form>
      {(isFocus || text.length > 0) && (
        <ClearTextIcon clearText={clearText} isDark={isDark} />
      )}
    </Flex>
  );
}

Search.propType = {
  onSearch: PropType.func,
};

export default Search;
