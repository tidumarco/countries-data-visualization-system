import React, { ChangeEvent, useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchCountriesThunk } from "../app/slices/countriesSlice";
import { AppDispatch, RootState } from "../app/store";
import CountryTable from "../components/CountryTable";
import SearchAppBar from "../components/SearchAppBar";

export default function DataCountry(props: any) {
  useEffect(() => (document.title = props.title), [props.title]);
  const [search, setSearch] = useState("");
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
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
  if (!search) {
    return (
      <div className="App">
        <SearchAppBar handleChange={onChange} />
      </div>
    );
  }
  return (
    <div className="App">
      <SearchAppBar handleChange={onChange} />
      <CountryTable filter={filteredCountry} />
    </div>
  );
}
