import React, { ChangeEvent, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useDispatch, useSelector } from "react-redux";
import { fetchCountriesThunk } from "../app/slices/countriesSlice";
import { AppDispatch, RootState } from "../app/store";
import CountryTable from "../components/CountryTable";
import SearchAppBar from "../components/SearchAppBar";

export default function DataCountry() {
  const [search, setSearch] = useState("");
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchCountriesThunk());
  }, [dispatch]);

  const { countries } = useSelector((state: RootState) => state);

  const filteredCountry = countries.items.filter((country) => {
    const searchCountry = search.toLowerCase();
    const countryName = country.name.common.toLowerCase();
    return searchCountry ? countryName.startsWith(searchCountry) : country;
  });
  return (
    <div className="App">
      <Helmet>
        <title>Data Country</title>
      </Helmet>
      <SearchAppBar handleChange={onChange} />
      <CountryTable filter={filteredCountry} />
    </div>
  );
}
