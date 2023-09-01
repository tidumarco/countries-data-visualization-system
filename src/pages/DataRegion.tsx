import React, { useState } from "react";
import BackButton from "../components/BackButton";
import Footer from "../components/Footer";
import PopulationChart from "../components/PopulationChart";
import AreaChart from "../components/AreaChart";

function DataRegion() {
  const [popChart, showPopChart] = useState(false);
  const [areaChart, showAreaChart] = useState(false);

  const handlePopChart = () => {
    showPopChart(true);
    showAreaChart(false);
  };

  const handleAreaChart = () => {
    showAreaChart(true);
    showPopChart(false);
  };

  return (
    <div className="flex flex-col" style={{ display: "flex", height: "100vh" }}>
      <div className="overflow-hidden flex-grow">
        <BackButton />
        <h1 className="text-center mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
          Data by region
        </h1>
        <p className="text-center mb-6 font-normal text-gray-700 dark:text-gray-400 flex justify-center w-screen">
          Here you can find two different visualization of the data by regions,
          please make your choice.
        </p>
        <div className="flex justify-center w-screen">
          <button
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={handlePopChart}
          >
            Show Bar Chart
          </button>
          <button
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={handleAreaChart}
          >
            Show Pie Chart
          </button>
        </div>
        <div>
          {popChart ? (
            <div>
              <PopulationChart />
            </div>
          ) : null}
          {areaChart ? (
            <div>
              <AreaChart />
            </div>
          ) : null}
        </div>
      </div>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}

export default DataRegion;
