export type Country = {
  flags: {
    png: string;
  };
  coatOfArms: {
    png: string;
  };
  name: {
    common: string;
  };
  region: string;
  capital: string[];
  population: number;
  languages: {
    [key: string]: string;
  };
  cca2: string;
  cca3: string;
  key: string;
  altSpellings: string[];
  area: number;
  currencies: {
    [key: string]: string;
  };
  latlng: number[];
  subregion: string;
  isLoading: boolean;
};

export type WorldCountries = Pick<Country, "region">;

export type CountriesState = {
  items: Country[];
  isLoading: boolean;
  error: null;
};

export type AppState = {
  countries: CountriesState;
};

export type Action = {
  data: any;
  status: number;
};

export interface SearchAppBarProps {
  handleChange: (e: any) => void;
}

export type BasicTable = {
  filter: Country[];
};
