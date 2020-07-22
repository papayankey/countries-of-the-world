import { system } from '@styled-system/core';

const config = {
  backgroundColor: {
    property: 'backgroundColor',
    scale: 'colors',
  },
  opacity: true,
};

// alias
config.bg = config.backgroundColor;

export const backgroundColor = system(config);
