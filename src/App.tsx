import React from "react";
import { Routes, Route } from "react-router-dom";
import background from "./images/background.jpeg";
import Home from "./pages/Home";
import DataRegion from "./pages/DataRegion";
import DataCountry from "./pages/DataCountry";
import RegionBars from "./pages/RegionBars";
import NoMatch from "./pages/NoMatch";
import RegionPie from "./pages/RegionPie";

function App() {
  return (
    <div
      className="bg-cover bg-fixed bg-center"
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="data-by-region" element={<DataRegion />}>
          <Route path="region-bars" element={<RegionBars />} />
          <Route path="pie-chart" element={<RegionPie />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
        <Route path="data-by-country" element={<DataCountry />} />
      </Routes>
    </div>
  );
}

export default App;
