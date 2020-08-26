import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Flex, Text, Container, Box } from '../shared';
import { ThemeContext } from '../components';

function AppBar({ onThemeToggle }) {
  const isDark = useContext(ThemeContext);

  return (
    <Box
      height="5xl"
      boxShadow={isDark ? '0 0 6px 4px hsl(207, 26%, 17%)' : 'md'}
      bg={isDark ? 'blue100' : 'white'}
      borderRadius="none"
    >
      <Container>
        <Flex height="100%" alignItems="center" justifyContent="space-between">
          <Link to="/">
            <Text
              fontWeight="extraBold"
              fontSize={[3, 4, 5]}
              color={isDark ? 'white' : null}
            >
              Where in the world?
            </Text>
          </Link>
          <Flex alignItems="center">
            <Box
              mr="md"
              onClick={() => onThemeToggle()}
              display="flex"
              alignItems="center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 512 512"
                style={{ cursor: 'pointer' }}
              >
                <path
                  d="M160,136c0-30.62,4.51-61.61,16-88C99.57,81.27,48,159.32,48,248c0,119.29,96.71,216,216,216,88.68,0,166.73-51.57,200-128-26.39,11.49-57.38,16-88,16C256.71,352,160,255.29,160,136Z"
                  style={{
                    fill: isDark ? 'white' : 'none',
                    stroke: isDark ? 'white' : '#000',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    strokeWidth: '32px',
                  }}
                />
              </svg>
            </Box>
            <Text fontWeight="semiBold" color={isDark ? 'white' : null}>
              Dark Mode
            </Text>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}

AppBar.propTypes = {
  onThemeToggle: PropTypes.func,
};

export default AppBar;
