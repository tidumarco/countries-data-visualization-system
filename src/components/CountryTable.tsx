import React from "react";

import { Typography, Box } from "@mui/material";

import { BasicTable } from "../types";

export default function CountryTable({ filter }: BasicTable) {
  if (!filter) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <Box
          display="flex"
          alignItems="center"
          flexDirection={"column"}
          padding="30px"
        >
          {filter.map((country) => (
            <div key={country.cca2}>
              <Typography variant="h2">{country.name.common}</Typography>
              <Box>
                <img
                  src={country.flags.png}
                  alt={country.name.common}
                  style={{ height: "100px", display: "flex" }}
                />
                <Box>
                  <Typography variant="h6">Coat of arms</Typography>
                  <img
                    src={country.coatOfArms.png}
                    alt={country.name.common}
                    style={{ height: "50px", display: "flex" }}
                  />
                </Box>
              </Box>
              <Box>
                <Typography variant="h6">Languages</Typography>
                <Typography variant="body2">
                  <ul>
                    {Object.values(country.altSpellings).map((lang: string) => {
                      return <li key={JSON.stringify(lang)}>{lang}</li>;
                    })}
                  </ul>
                </Typography>
              </Box>
              <Box>
                <Typography variant="h6">Currencies</Typography>
                <Typography variant="body2">
                  <ul>
                    {Object.values(country.currencies).map((curr: any) => {
                      return (
                        <li key={JSON.stringify(curr)}>
                          {curr.name} ({curr.symbol})
                        </li>
                      );
                    })}
                  </ul>
                </Typography>
              </Box>
              <Box>
                <Typography variant="h6">Capitals</Typography>
                <Typography variant="body2">
                  <ul>
                    {Object.values(country.capital).map((lang: string) => {
                      return <li key={JSON.stringify(lang)}>{lang}</li>;
                    })}
                  </ul>
                </Typography>
              </Box>
              <Box>
                <Typography variant="h6">Population</Typography>
                <Typography variant="body2">
                  {country.population.toLocaleString()}
                </Typography>
              </Box>
              <Box>
                <Typography variant="h6">Region</Typography>
                <Typography variant="body2">{country.region}</Typography>
              </Box>
              <Box>
                <Typography variant="h6">Sub Region</Typography>
                <Typography variant="body2">{country.subregion}</Typography>
              </Box>
              <Box>
                <Typography variant="body2">
                  <Typography variant="h6">Area</Typography>
                  {country.area.toFixed(2)}
                </Typography>
              </Box>
              <Box>
                <Typography variant="h6">Latitude</Typography>
                <Typography variant="body2">
                  {country.latlng[0].toFixed(1)}
                </Typography>
              </Box>
              <Box>
                <Typography variant="h6">Longitude</Typography>
                <Typography variant="body2">
                  {country.latlng[1].toFixed(1)}
                </Typography>
              </Box>
            </div>
          ))}
        </Box>
      </>
    );
  }
}
