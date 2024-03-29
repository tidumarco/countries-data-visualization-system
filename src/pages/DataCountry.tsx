import React, { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCountriesByNameThunk,
  selectFilteredCountriesByName,
} from "../app/slices/countriesSlice";
import { AppDispatch } from "../app/store";
import CountryTable from "../components/CountryTable";
import SearchAppBar from "../components/SearchAppBar";
import BackButton from "../components/BackButton";
import Footer from "../components/Footer";
import { debounce } from "lodash";

export default function DataCountry() {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const filteredCountry = useSelector(selectFilteredCountriesByName);

  useEffect(() => {
    const MIN_SEARCH_LENGTH = 3;
    if (search.length >= MIN_SEARCH_LENGTH) {
      dispatch(fetchCountriesByNameThunk(search));
    }
  }, [search, dispatch]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setSearch(inputValue);
  };

  //   return (
  //     <div className="flex flex-col min-h-screen">

  //       <h1 className="text-center mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-4xl dark:text-white">
  //         Data by country
  //       </h1>
  //       <div style={{ display: "flex", height: "1000vh" }}></div>
  {
    /* <div className="m-2 flex flex-col items-center justify-center">
        <h5 className="text-center mb-6 text-lg font-normal text-gray-800 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          Please search for a country...
        </h5>
        <SearchAppBar handleChange={debounce(onChange, 300)} />
        <div style={{ display: "flex", height: "70vh" }}>
          {search.length > 0 && <CountryTable filter={filteredCountry} />}
        </div>
      </div> */
  }

  //       <Footer />
  //     </div>
  //   );
  return (
    <div className="flex flex-col min-h-screen">
      <div className="overflow-hidden flex-grow">
        <BackButton />
        <h1 className="text-center pt-14 mb-4  font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-4xl dark:text-white">
          Data by country
        </h1>
        <p className="text-center mb-6 text-lg font-normal text-gray-800 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          Please search for a country...
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingBottom: 12,
          }}
        >
          <SearchAppBar handleChange={debounce(onChange, 300)} />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingBottom: 12,
          }}
        >
          {search.length > 0 && <CountryTable filter={filteredCountry} />}
        </div>
      </div>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}
