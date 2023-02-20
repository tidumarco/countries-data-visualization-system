/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import { Chart as ChartJS, registerables } from "chart.js";
import { Chart } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../app/store";
import { fetchCountriesThunk, handleSort } from "../app/slices/countriesSlice";

ChartJS.register(...registerables);

function AreaChart() {
  const { countries } = useSelector((state: RootState) => {
    return state;
  });
  const dispatch = useDispatch<AppDispatch>();
  const [region, setRegion] = useState("");

  useEffect(() => {
    dispatch(fetchCountriesThunk());
  }, [dispatch]);

  function handleRegion(e: any) {
    setRegion(e.target.value);
    dispatch(handleSort(0));
  }

  const names = countries.items.map((country) => {
    if (country.region === region) {
      return country.name.common;
    }
  });

  for (let i = 0; i < names.length; i++) {
    if (names[i] === undefined) {
      names.splice(i, 1);
      i--;
    }
  }
  const area = countries.items.map((country) => {
    if (country.region === region && country.area != null) {
      return country.area;
    }
  });

  for (let i = 0; i < area.length; i++) {
    //@ts-ignore
    if (area[i] === undefined || area[i] < 0) {
      area.splice(i, 1);
      i--;
    }
  }

  const randomNum = () => Math.floor(Math.random() * (235 - 52 + 1) + 52);

  const randomRGB = () => `rgb(${randomNum()}, ${randomNum()}, ${randomNum()})`;

  const data = {
    type: "Bar",
    labels: names,
    datasets: [
      {
        label: "Area",
        backgroundColor: randomRGB,
        borderColor: "rgb(0, 0, 0)",
        data: area,
        responsive: true,
        maintainAspectRatio: false,
      },
    ],
  };

  return (
    <div>
      <div
        className="mt-3 inline-flex rounded-md flex justify-center w-full"
        role="group"
      >
        <button
          type="button"
          value="Europe"
          onClick={handleRegion}
          className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
        >
          Europe
        </button>
        <button
          type="button"
          value="Americas"
          onClick={handleRegion}
          className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
        >
          Americas
        </button>
        <button
          type="button"
          value="Asia"
          onClick={handleRegion}
          className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
        >
          Asia
        </button>
        <button
          type="button"
          value="Oceania"
          onClick={handleRegion}
          className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
        >
          Oceania
        </button>
      </div>
      <div className="p-5 flex flex-col items-center justify-center max-h-[75%]">
        <h2 className="pt-12 text-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Region: {region}
        </h2>

        <Chart
          className="bg-white max-w-[75%] max-h-[89%]"
          data={data}
          type={"pie"}
        />
      </div>
    </div>
  );
}

export default AreaChart;
