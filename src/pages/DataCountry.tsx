import React, { ChangeEvent, useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchCountriesThunk } from "../app/slices/countriesSlice";
import { AppDispatch, RootState } from "../app/store";
import CountryTable from "../components/CountryTable";
import SearchAppBar from "../components/SearchAppBar";
import BackButton from "../components/BackButton";
import Footer from "../components/Footer";
import { debounce } from "lodash";

export default function DataCountry() {
  const [search, setSearch] = useState("");
  const debounceSetSearch = debounce(setSearch, 300);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const MIN_SEARCH_LENGTH = 3;
    e.target.value.length < MIN_SEARCH_LENGTH
      ? debounceSetSearch("")
      : debounceSetSearch(e.target.value);
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
      <>
        <div>
          <BackButton />
        </div>
        <h1 className="text-center mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Data by country
        </h1>
        <div className="m-2 flex flex-col items-center h-screen">
          <h5 className="text-center mb-6 text-lg font-normal text-gray-800 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            Please search for a country...
          </h5>
          <SearchAppBar handleChange={onChange} />
        </div>
        <div className="mt-auto">
          <Footer />
        </div>
      </>
    );
  }
  return (
    <>
      <BackButton />
      <h1 className="text-center mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Data by country
      </h1>
      <div className="m-2 flex flex-col items-center justify-center ">
        <h5 className="text-center mb-6 text-lg font-normal text-gray-800 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          Please search for a country...
        </h5>
        <SearchAppBar handleChange={onChange} />
        <br />
        <CountryTable filter={filteredCountry} />
      </div>
      <div className="mt-auto">
        <Footer />
      </div>
    </>
  );
}
