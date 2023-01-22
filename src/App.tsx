import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import Home from "./pages/Home";
import DataRegion from "./pages/DataRegion";
import DataCountry from "./pages/DataCountry";
import DataCapital from "./pages/DataCapital";
import RegionBars from "./pages/RegionBars";
import NoMatch from "./pages/NoMatch";
import RegionPie from "./pages/RegionPie";

const helmetContext = {};
export default function App() {
  return (
    <HelmetProvider context={helmetContext}>
      <div className="App">
        <Outlet />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="data-by-region" element={<DataRegion />}>
            <Route path="region-bars" element={<RegionBars />} />
            <Route path="pie-chart" element={<RegionPie />} />
            <Route path="../" element={<Home />}>
              back home
            </Route>
            <Route path="*" element={<NoMatch />} />
          </Route>
          <Route path="data-by-country" element={<DataCountry />} />
          <Route path="data-by-capital" element={<DataCapital />} />
        </Routes>
      </div>
    </HelmetProvider>
  );
}
