import React, { useEffect } from "react";

import { Link, Outlet } from "react-router-dom";

export default function DataRegion() {
  // useEffect(() => (document.title = props.title), [props.title]);

  return (
    <div className="App">
      <h3 className="pt-12 text-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Data by Region
      </h3>
      <p className="font-normal text-gray-700 dark:text-gray-400 flex justify-center w-screen">
        Here are the biggest enterprise technology acquisitions of 2021 so far,
        in reverse chronological order.
      </p>

      <nav className="pt-8 nav-links flex justify-center w-screen">
        <button
          type="button"
          className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          <Link to="region-bars">Region Bars</Link>
        </button>
        <button
          type="button"
          className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        >
          <Link to="pie-chart">Pie Chart</Link>
        </button>
      </nav>
      <Outlet />
    </div>
  );
}
