import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";

import axios from "axios";

import { Country } from "../../types";
import { RootState } from "../store";

export interface countriesState {
  items: Country[];
  isLoading: boolean;
  region: string;
  name: string;
  error: string | undefined;
}

const initialState: countriesState = {
  items: [],
  isLoading: false,
  region: "",
  name: "",
  error: "",
};

export const selectCountries = (state: RootState) => state.countries;

export const selectFilteredCountriesByName = createSelector(
  selectCountries,
  (countries: countriesState) => {
    const { items, name } = countries;
    const filteredCountries = items.filter((country) =>
      country.name.common.toLowerCase().includes(name.toLowerCase())
    );
    return filteredCountries;
  }
);

export const fetchCountriesThunk = createAsyncThunk(
  "countries/fetch",
  async () => {
    const url = "http://localhost:3001/countries";
    const response = await axios.get(url);
    return {
      data: response.data as Country[],
      status: response.status,
    };
  }
);

export const fetchCountriesByRegionThunk = createAsyncThunk(
  "countries/fetchByRegion",
  async (region: string) => {
    const url = `http://localhost:3001/countries/${region}`;
    const response = await axios.get(url);
    return {
      data: response.data,
      status: response.status,
    };
  }
);

export const fetchCountriesByNameThunk = createAsyncThunk(
  "countries/fetchByName",
  async (name: string) => {
    const url = `http://localhost:3001/countries/name/${name}`;
    const response = await axios.get(url);
    return {
      data: response.data,
      status: response.status,
    };
  }
);

function compare(a: Country, b: Country) {
  if (a.name.common < b.name.common) {
    return -1;
  }
  if (a.name.common > b.name.common) {
    return 1;
  }
  return 0;
}

export const countriesSlice = createSlice({
  name: "country",
  initialState,
  reducers: {
    handleSort: (state, action) => {
      const sortedItems = state.items.sort(compare);
      state.items = sortedItems;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCountriesThunk.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCountriesThunk.fulfilled, (state, action) => {
      state.items = action.payload.data;
      state.isLoading = false;
    });
    builder.addCase(fetchCountriesByRegionThunk.fulfilled, (state, action) => {
      state.items = action.payload.data;
      state.isLoading = false;
      state.region = action.meta.arg;
    });
    builder.addCase(fetchCountriesByNameThunk.fulfilled, (state, action) => {
      state.items = action.payload.data;
      state.isLoading = false;
    });
    builder.addCase(fetchCountriesByNameThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export const { handleSort } = countriesSlice.actions;
export default countriesSlice.reducer;
