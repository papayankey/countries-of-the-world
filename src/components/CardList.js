import React from 'react';
import PropType from 'prop-types';
import { Link } from 'react-router-dom';

import Card from './Card';

function CardList({ countries }) {
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
  isLoading: PropType.bool.isRequired,
  isError: PropType.bool.isRequired,
};

export default CardList;
