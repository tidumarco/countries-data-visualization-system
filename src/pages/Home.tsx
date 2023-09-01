import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { useAppDispatch } from "../app/hooks";
import { deleteAllCountries } from "../app/slices/countriesSlice";

function Home() {
  const dispatch = useAppDispatch();
  return (
    <div className="flex flex-col min-h-screen">
      <div className="overflow-hidden flex-grow">
        <h1 className="text-center pt-14 mb-4  font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-4xl dark:text-white">
          Welcome to our system
        </h1>
        <p className="text-center mb-6 text-lg font-normal text-gray-800 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          In this application you can find data about countries from allover the
          world, and also data about regions.
        </p>
        <div className="flex justify-center w-screen">
          <Link
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            to="data-by-region"
          >
            Data by region
          </Link>

          <Link
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            to="data-by-country"
            onClick={() => dispatch(deleteAllCountries)}
          >
            Data by country
          </Link>
        </div>
      </div>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
