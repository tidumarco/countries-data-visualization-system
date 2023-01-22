import React, { ReactEventHandler, useEffect, useState } from "react";
import { Chart as ChartJS, registerables } from "chart.js";
import { Bar, Chart, Scatter } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../app/store";
import { fetchCountriesThunk, handleSort } from "../app/slices/countriesSlice";
import { Box, Button, Typography } from "@mui/material";

ChartJS.register(...registerables);

function AreaChart() {
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
    <Box className="chart-container" sx={{ height: "1000px", width: "1000px" }}>
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
      <Typography>DATA: Area</Typography>
      <Chart data={data} type={"pie"} />
    </Box>
  );
}

export default AreaChart;
