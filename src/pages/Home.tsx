import { Box } from "@mui/material";
import React, { ChangeEvent, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import PopulationChart from "../components/PopulationChart";
import CountryTable from "../components/CountryTable";
import SearchBar from "../components/SearchBar";
import AreaChart from "../components/AreaChart";

export default function Home() {
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
    <>
      <PopulationChart />
	  <AreaChart />
      {/* <SearchBar handleChange={onChange} />
      <CountryTable filter={filteredCountry} /> */}
    </>
  );
}
