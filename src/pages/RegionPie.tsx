import { Typography } from "@mui/material";
import React from "react";
import AreaChart from "../components/AreaChart";

export default function RegionBars() {
  return (
    <div className="App">
      <Typography variant="h4">PIE CHART</Typography>
      <AreaChart />
    </div>
  );
}
