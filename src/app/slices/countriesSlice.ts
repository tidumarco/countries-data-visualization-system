import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";

import { Country } from "../../types";

export interface countriesState {
  items: Country[];
  isLoading: boolean;
  region: string;
}

const initialState: countriesState = {
  items: [],
  isLoading: false,
  region: "",
};

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
  },
});

export const { handleSort } = countriesSlice.actions;
export default countriesSlice.reducer;
