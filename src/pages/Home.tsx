import { Paper, Typography, Box } from "@mui/material";
import React, { useEffect } from "react";
import Image from "../images/world.jpeg";
import { Link } from "react-router-dom";

import "../App.css";

export default function Home(props: any) {
  useEffect(() => (document.title = props.title), [props.title]);

  const linkStyle = {
    textDecoration: "none",
  };

  const paperStyle = {
    backgroundImage: `url(${Image})`,
    backgroundSize: "cover",
    width: "100vw",
    height: "100vh",
    display: "flex",
  };
  return (
    <Paper className="paper-background" style={paperStyle}>
      <Box display="flex" flexDirection="row" alignContent="center">
        <Typography variant="h3">Welcome to our system</Typography>
        <Typography variant="body2">
          <ul>
            <li>
              <Link style={linkStyle} to="data-by-region">
                Data by region
              </Link>
            </li>
            <li>
              <Link style={linkStyle} to="data-by-country">
                Data by country
              </Link>
            </li>
          </ul>
        </Typography>
      </Box>
    </Paper>
  );
}
