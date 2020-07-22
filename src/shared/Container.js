import React from 'react';

import { Box } from './Box';

export function Container({ children, ...other }) {
  return (
    <Box
      height="100%"
      width={[1, '80%', '60%']}
      px={['lg', 'none']}
      mx={[null, 'auto']}
      {...other}
    >
      {children}
    </Box>
  );
}
