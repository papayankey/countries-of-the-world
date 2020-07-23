import React from 'react';

import { Box } from './Box';

export function Container({ children, ...other }) {
  return (
    <Box
      height="100%"
      width={{ sm: 1, md: '80%', lg: '60%', xl: '50%' }}
      px={['md', 0]}
      mx={[null, 'auto']}
      {...other}
    >
      {children}
    </Box>
  );
}
