export type Country = {
  flags: {
    png: string
  }
  name: {
    common: string
  }
  region: string
  capital: string[]
  population: number
  languages: {
    [key: string]: string
  }
  cca2: string
  cca3: string
  key: string
}

export type CountriesState = {
  items: Country[]
  isLoading: boolean
  error: null
}

export type AppState = {
  countries: CountriesState
}

export type Action = {
  data: any
  status: number
}

export type Cart = Pick<Country, 'cca2' | 'name' | 'flags' | 'capital'>

export interface CartState {
  items: Cart[]
}

export type Favourite = {
  favourite: Country
}

export type RemovedFavourite = {
  favourite: string
}

export interface SearchAppBarProps {
  handleChange: (e: any) => void
}

export type BasicTable = {
  filter: Country[]
}
