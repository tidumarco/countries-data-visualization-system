import React from "react";
import PopulationChart from "../components/PopulationChart";

function RegionBars() {
  return (
    <div className="w-full">
      <h4 className="pt-4 text-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Region Bars
      </h4>
      <PopulationChart />
    </div>
  );
}

export default RegionBars;
