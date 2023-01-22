import React, { ChangeEvent, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import CountryTable from "../components/CountryTable";
import SearchAppBar from "../components/SearchAppBar";
import SearchBar from "../components/SearchAppBar";

export default function DataCountry() {
  const [search, setSearch] = useState("");
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  const { countries } = useSelector((state: RootState) => state);
  const filteredCountry = countries.items.filter((country) => {
    const searchCountry = search.toLowerCase();
    const countryName = country.name.common.toLowerCase();
    return searchCountry ? countryName.startsWith(searchCountry) : country;
  });
  return (
    <div className="App">
      <h1>Data by Country</h1>
      <SearchAppBar handleChange={onChange} />
      <CountryTable filter={filteredCountry} />
    </div>
  );
}
