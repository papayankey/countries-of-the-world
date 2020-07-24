import React from 'react';

import { Box } from './Box';

export function Container({ children, ...other }) {
  return (
    <Box
      height="100%"
      width={{ _: 1, sm: 1, md: '80%', xl: '60%' }}
      px={['md', 0]}
      mx={[null, 'auto']}
      {...other}
    >
      {children}
    </Box>
  );
}
