import { Box } from "@mui/material";
import React, { ChangeEvent, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import BarChart from "../components/BarChart";
import CountryTable from "../components/CountryTable";
import SearchBar from "../components/SearchBar";

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
      <Box sx={{ display: "column" }}>
        <BarChart />
        <SearchBar handleChange={onChange} />
        <CountryTable filter={filteredCountry} />
      </Box>
    </>
  );
}
