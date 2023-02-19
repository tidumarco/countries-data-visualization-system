import React from "react";
import PopulationChart from "../components/PopulationChart";

export default function RegionBars() {
  return (
    <div>
      <h4 className="pt-12 text-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Region Bars
      </h4>
      <PopulationChart />
    </div>
  );
}
