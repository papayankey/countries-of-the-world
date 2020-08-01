import React from 'react';
import PropType from 'prop-types';
import { Link } from 'react-router-dom';

import Card from './Card';
import { Box } from '../shared';

function CardList({ countries, searchTerm }) {
  if (searchTerm && countries.length <= 0) {
    return <Box as="p">No match with search term: {searchTerm}</Box>;
  }

  return countries.map(country => {
    return (
      <Link key={country.name} to={`/countries/${country.name}`}>
        <Card country={country} />
      </Link>
    );
  });
}

CardList.propType = {
  countries: PropType.array.isRequired,
  searchTerm: PropType.string,
};

export default CardList;
