import React, { ChangeEvent, useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchCountriesThunk } from "../app/slices/countriesSlice";
import { AppDispatch, RootState } from "../app/store";
import CountryTable from "../components/CountryTable";
import SearchAppBar from "../components/SearchAppBar";
import BackButton from "../components/BackButton";
import Footer from "../components/Footer";
const useDebounceValue = (value: string, time = 250) => {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setDebounceValue(value);
    }, time);

    return () => {
      clearTimeout(timeOut);
    };
  }, [value, time]);

  return debounceValue;
};

export default function DataCountry() {
  const [search, setSearch] = useState("");
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };
  const debounceSearch = useDebounceValue(search);
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

  if (!debounceSearch) {
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
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
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
