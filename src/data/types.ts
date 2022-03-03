export interface ICountry {
  altSpellings: string[];
  area: number;
  borders: string[];
  capital: string | string[];
  capitalInfo: { [key: string]: number[] };
  car: { signs: string[]; side: string };
  cca2: string;
  cca3: string;
  ccn3: string;
  cioc: string;
  coatOfArms: { png: string; svg: string };
  continents: string[];
  currencies: { [key: string]: { name: string; symbol: string } };
  demonyms: { [key: string]: { f: string; m: string } };
  fifa: string;
  flag: string;
  flags: { png: string; svg: string };
  gini: { number: number };
  idd: { root: string; suffixes: string[] };
  independent: boolean;
  landlocked: boolean;
  languages: { [key: string]: string };
  latlng: number[];
  maps: { googleMaps: string; openStreetMaps: string };
  name: {
    common: string;
    official: string;
    nativeName: { [key: string]: { official: string; common: string } };
  };
  population: number;
  postalCode: { format: string; regex: string };
  region: string;
  startOfWeek: string;
  status: string;
  subregion: string;
  timezones: string[];
  tld: string[];
  translations: { [key: string]: { official: string; common: string } };
  unMember: boolean;
}

export enum Region {
  "ALL" = "all",
  "AFRICA" = "africa",
  "AMERICAS" = "americas",
  "ASIA" = "asia",
  "EUROPE" = "europe",
  "OCEANIA" = "oceania",
}
