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

function PopulationChart() {
  const { countries } = useSelector((state: RootState) => state);
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
      let countryName;
      if (!country.region) return "";
      if (country.region === region) {
        countryName = country.name.common;
      }
      return countryName;
    })
    .filter((name) => name !== undefined);

  const population = countries.items
    .map((country) => {
      let countryPopulation;
      if (!country.region) return "";
      if (country.region === region && country.population != null) {
        countryPopulation = country.population;
      }
      return countryPopulation;
    })
    .filter((population) => population !== undefined);

  const randomNum = () =>
    Math.floor(Math.random() * (RGB1 - RGB2 + RGB3) + RGB2);

  const randomRGB = () => `rgb(${randomNum()}, ${randomNum()}, ${randomNum()})`;

  const data = {
    type: "Bar",
    labels: names,
    datasets: [
      {
        label: `${region} Population`,
        backgroundColor: randomRGB,
        borderColor: "rgb(0, 0, 0)",
        data: population,
        responsive: true,
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
      <div
        className="p-4"
        style={{ display: "flex", height: "60vh", justifyContent: "center" }}
      >
        <Chart className="bg-white" data={data} type={"bar"} />
      </div>
    </div>
  );
}

export default PopulationChart;
