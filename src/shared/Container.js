import React from 'react';
import PropTypes from 'prop-types';

import Box from './Box';

function Container({ children, ...other }) {
  return (
    <Box
      height="100%"
      width={[1, '80%', '70%']}
      px={['md', 0]}
      mx={[null, 'auto']}
      {...other}
    >
      {children}
    </Box>
  );
}

Container.propTypes = {
  children: PropTypes.node,
  other: PropTypes.array,
};

export default Container;
