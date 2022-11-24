import React, { useEffect } from "react";
import { Chart as ChartJS, registerables } from "chart.js";
import { Chart } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../app/store";
import { fetchCountriesThunk } from "../app/slices/countriesSlice";

ChartJS.register(...registerables);

function BarChart() {
  const { countries } = useSelector((state: RootState) => state);
  const dispatch = useDispatch<AppDispatch>();
  
  const names = countries.items.map((country) => {
    if (country.region === "Europe") {
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
    if (country.region === "Europe" && country.population != null) {
      return country.population;
    }
  });

  for (let i = 0; i < population.length; i++) {
    if (population[i] === undefined) {
      population.splice(i, 1);
      i--;
    }
  }

  useEffect(() => {
    dispatch(fetchCountriesThunk());
  }, [dispatch]);

  const data = {
    type: "Bar",
    labels: names,
    datasets: [
      {
        label: "Population",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: population,
		responsive: true,
      },
    ],
    
  };
  return (
    <div className="chart-container" style={{ position: 'relative', height:'80vh', width:'200vw'}}>
      <Chart data={data} type={"line"} />
    </div>
  );
}

export default BarChart;
