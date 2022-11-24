import React from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";

import { useDispatch } from "react-redux";

import { BasicTable, Country } from "../types";

import { AppDispatch } from "../app/store";

export default function CountryTable({ filter }: BasicTable) {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Flag</TableCell>
            <TableCell>Coat of arms</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Alternate Spellings</TableCell>
            <TableCell>Capital</TableCell>
            <TableCell>Population</TableCell>
            <TableCell>Region</TableCell>
            <TableCell>Subregion</TableCell>
            <TableCell>Languages</TableCell>
            <TableCell>Area</TableCell>
            <TableCell>Lat. and long.</TableCell>
            <TableCell>Currencies</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filter.map((country: Country) => (
            <TableRow key={country.cca2}>
              <TableCell component="th" scope="row">
                <img
                  src={country.flags.png}
                  alt={country.name.common}
                  style={{ height: "50px" }}
                />
              </TableCell>
              <TableCell component="th" scope="row">
                <img
                  src={country.coatOfArms.png}
                  alt={country.name.common}
                  style={{ height: "50px", display: "flex" }}
                />
              </TableCell>
              <TableCell>{country.name.common}</TableCell>
              <TableCell>
                <ul>
                  {Object.values(country.altSpellings).map((lang: string) => {
                    return <li key={JSON.stringify(lang)}>{lang}</li>;
                  })}
                </ul>
              </TableCell>
              <TableCell>
                <ul>
                  {Object.values(country.capital).map((lang: string) => {
                    return <li key={JSON.stringify(lang)}>{lang}</li>;
                  })}
                </ul>
              </TableCell>
              <TableCell>{country.population}</TableCell>
              <TableCell>{country.region}</TableCell>
              <TableCell>{country.subregion}</TableCell>
              <TableCell>
                <ul>
                  {Object.values(country.languages).map((lang: string) => {
                    return <li key={JSON.stringify(lang)}>{lang}</li>;
                  })}
                </ul>
              </TableCell>
              <TableCell>{country.area}</TableCell>
              <TableCell>{country.latlng}</TableCell>
			  <TableCell>
                <ul>
                  {Object.values(country.currencies).map((curr: any) => {
                    return <li key={JSON.stringify(curr)}>{curr.name} ({curr.symbol})</li>;
                  })}
                </ul>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
