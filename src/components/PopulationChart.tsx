import React, { useEffect, useState } from "react";
import { Chart as ChartJS, registerables } from "chart.js";
import { Chart } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../app/store";
import { fetchCountriesThunk, handleSort } from "../app/slices/countriesSlice";
import { Button, Typography } from "@mui/material";

ChartJS.register(...registerables);

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
  const population = countries.items.map((country) => {
    if (country.region === region && country.population != null) {
      return country.population;
    }
  });

  for (let i = 0; i < population.length; i++) {
    if (population[i] === undefined) {
      population.splice(i, 1);
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
        label: "Population",
        backgroundColor: randomRGB,
        borderColor: "rgb(0, 0, 0)",
        data: population,
        responsive: true,
      },
    ],
  };
  return (
    <div className="chartcontainer">
      <Button value="Europe" onClick={handleRegion}>
        EUROPE
      </Button>
      <Button value="Americas" onClick={handleRegion}>
        AMERICAS
      </Button>
      <Button value="Asia" onClick={handleRegion}>
        ASIA
      </Button>
      <Button value="Oceania" onClick={handleRegion}>
        OCEANIA
      </Button>
      <Typography>REGION: {region}</Typography>
      <Typography>DATA: Population</Typography>
      <Chart data={data} type={"bar"} />
    </div>
  );
}

export default PopulationChart;
