import { Typography } from "@mui/material";
import React from "react";
import PopulationChart from "../components/PopulationChart";

export default function RegionBars() {
  return (
    <div className="App">
      <Typography variant="h4">REGION BARS</Typography>
      <PopulationChart />
    </div>
  );
}
