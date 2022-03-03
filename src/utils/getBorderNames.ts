import { countryThreeLetterAbbreviation as countryAbbrv } from "../data/iso3166";
import { ICountry } from "../data/types";

export default function getBorderNames(country: ICountry) {
  return country.borders
    .filter((border) => Boolean(border.length))
    .map((border) => countryAbbrv[border]);
}
