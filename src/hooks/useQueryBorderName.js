import { countryThreeLetterAbbreviation as countryAbbrv } from '../iso3166';

export function useQueryBorderName(borders) {
  return borders.map(border => countryAbbrv[border]);
}
