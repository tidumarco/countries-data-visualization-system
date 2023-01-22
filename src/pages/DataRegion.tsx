import React, { useEffect } from "react";
import { Button, Typography } from "@mui/material";
import { Link, Outlet } from "react-router-dom";

export default function DataRegion(props: any) {
  useEffect(() => (document.title = props.title), [props.title]);
  const linkStyle = {
    textDecoration: "none",
  };
  return (
    <div className="App">
      <Typography variant="h3">Data by Region</Typography>
      <nav className="nav-links">
        <Button>
          <Link style={linkStyle} to="region-bars">
            Region Bars
          </Link>
        </Button>
        <Button>
          <Link style={linkStyle} to="pie-chart">
            Pie Chart
          </Link>
        </Button>
      </nav>
      <Outlet />
    </div>
  );
}
