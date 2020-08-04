import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Card from './Card';
import ThemeContext from './ThemeContext';
import { Text } from '../shared';

function CardList({ countries, searchTerm }) {
  const isDark = useContext(ThemeContext);

  if (searchTerm && countries.length <= 0) {
    return (
      <Text color={isDark ? 'white' : null}>
        No match with search term:{' '}
        <Text as="span" fontStyle="italic" color="gray300">
          {searchTerm}
        </Text>
      </Text>
    );
  }

  return countries.map(country => {
    return (
      <Link key={country.name} to={`/countries/${country.name}`}>
        <Card country={country} />
      </Link>
    );
  });
}

CardList.propTypes = {
  countries: PropTypes.array.isRequired,
  searchTerm: PropTypes.string,
};

export default CardList;
