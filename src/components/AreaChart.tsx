/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import { Chart as ChartJS, registerables } from "chart.js";
import { Chart } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../app/store";
import { fetchCountriesThunk, handleSort } from "../app/slices/countriesSlice";
import {
  firstButtonStyles,
  lastButtonStyles,
  middleButtonStyles,
} from "./AreaChart.styles";

ChartJS.register(...registerables);

const RGB1 = 235;
const RGB2 = 52;
const RGB3 = 1;

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

  const names = countries.items
    .map((country) => {
      if (country.region === region) {
        return country.name.common;
      }
    })
    .filter((name) => name !== undefined);

  const area = countries.items
    .map((country) => {
      if (country.region === region && country.area !== undefined) {
        return country.area;
      }
    })
    .filter((a) => a !== undefined && a >= 0);

  const randomNum = () =>
    Math.floor(Math.random() * (RGB1 - RGB2 + RGB3) + RGB2);

  const randomRGB = () => `rgb(${randomNum()}, ${randomNum()}, ${randomNum()})`;

  const data = {
    type: "Pie",
    title: "Areas",
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

  type regionButtonProps = {
    value: string;
    className: string;
  };

  const RegionButton = (props: regionButtonProps) => {
    return (
      <button
        value={props.value}
        className={props.className}
        onClick={handleRegion}
      >
        {props.value}
      </button>
    );
  };

  return (
    <div>
      <div
        className="mt-3 inline-flex rounded-md flex justify-center w-full"
        role="group"
      >
        <RegionButton value="Europe" className={firstButtonStyles} />
        <RegionButton value="Americas" className={middleButtonStyles} />
        <RegionButton value="Asia" className={middleButtonStyles} />
        <RegionButton value="Oceania" className={lastButtonStyles} />
      </div>
      <div className="p-5 flex flex-col items-center justify-center max-h-[75%]">
        <h2 className="pt-12 text-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Areas of {region}
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
