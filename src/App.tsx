import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";

import Home from "./pages/Home";
import DataRegion from "./pages/DataRegion";
import DataCountry from "./pages/DataCountry";
import RegionBars from "./pages/RegionBars";
import NoMatch from "./pages/NoMatch";
import RegionPie from "./pages/RegionPie";

export default function App() {
  return (
    <div className="App">
      <Outlet />
      <Routes>
        <Route path="/" element={<Home title="Homepage" />} />
        <Route
          path="data-by-region"
          element={<DataRegion title="Data region" />}
        >
          <Route path="region-bars" element={<RegionBars />} />
          <Route path="pie-chart" element={<RegionPie />} />

          <Route path="*" element={<NoMatch />} />
        </Route>
        <Route
          path="data-by-country"
          element={<DataCountry title="Data Country" />}
        />
      </Routes>
    </div>
  );
}
