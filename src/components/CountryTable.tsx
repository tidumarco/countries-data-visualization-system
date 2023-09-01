import React from "react";

import { BasicTable } from "../types";
import {
  coatOfArmsStyles,
  flagStyles,
  tableMapStyles,
} from "./CountryTable.styles";

type tableTitle = {
  textValue: string;
};

type tableImage = {
  src: string;
  alt: string;
  style: React.CSSProperties;
};

const TableTitle = (props: tableTitle) => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {props.textValue}
      </h1>
    </div>
  );
};

const TableImage = (props: tableImage) => {
  return <img src={props.src} alt={props.alt} style={props.style} />;
};

const gridStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)" /* Three columns */,
  gridGap: "10px" /* Gap between grid items */,
};

const gridItemStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  padding: "10px",
  textAlign: "center",
  backgroundColor: "#e0e0e0",
  border: "1px solid #ccc",
};

export default function CountryTable({ filter }: BasicTable) {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          backgroundColor: "white",
          padding: 20,
        }}
      >
        {/* {filter.map((country) => (
          <div key={country.cca2}>
            <TableTitle textValue={country.name.common} />
            <div className="flex flex-col items-center">
              <TableImage src={country.flags.png} alt={country.name.common} style={flagStyles} />
              <div className="flex flex-col items-center">
                <TableTitle textValue="Coat of arms" />
                <TableImage
                  src={country.coatOfArms.png}
                  alt={country.name.common}
                  style={coatOfArmsStyles}
                />
              </div>
            </div>
            <div className="flex flex-col items-center">
              <TableTitle textValue="Languages" />
              <div>
                <ul className={tableMapStyles}>
                  {Object.values(country.languages).map((lang: string) => {
                    return <li key={JSON.stringify(lang)}>{lang}</li>;
                  })}
                </ul>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <TableTitle textValue="Currencies" />
              <div>
                <ul className={tableMapStyles}>
                  {Object.values(country.currencies).map((curr: any) => {
                    return (
                      <li key={JSON.stringify(curr)}>
                        {curr.name} ({curr.symbol})
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <TableTitle textValue="Capitals" />
              <div>
                <ul>
                  {Object.values(country.capital).map((lang: string) => {
                    return <li key={JSON.stringify(lang)}>{lang}</li>;
                  })}
                </ul>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <TableTitle textValue="Population" />
              <div>{country.population.toLocaleString()}</div>
            </div>
            <div className="flex flex-col items-center">
              <TableTitle textValue="Region" />
              <div>{country.region}</div>
            </div>
            <div className="flex flex-col items-center">
              <TableTitle textValue="Subregion" />
              <div>{country.subregion}</div>
            </div>
            <div className="flex flex-col items-center">
              <TableTitle textValue="Area" />
              <div>{country.area.toFixed(2)}</div>
            </div>
            <div className="flex flex-col items-center">
              <TableTitle textValue="Latitude" />
              <div>{country.latlng[0].toFixed(1)}</div>
            </div>
            <div className="flex flex-col items-center">
              <TableTitle textValue="Longitude" />
              <div>{country.latlng[1].toFixed(1)}</div>
            </div>
          </div>
        ))} */}
        {filter.map((country) => (
          <div
            key={country.cca2}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <TableTitle textValue={country.name.common} />

            <div style={gridStyle}>
              <div style={gridItemStyle}>
                <TableImage
                  src={country.flags.png}
                  alt={country.name.common}
                  style={flagStyles}
                />
              </div>
              <div style={gridItemStyle}>
                <TableTitle textValue="Coat of arms" />
                <TableImage
                  src={country.coatOfArms.png}
                  alt={country.name.common}
                  style={coatOfArmsStyles}
                />
              </div>
              <div style={gridItemStyle}>
                <TableTitle textValue="Languages" />
                <ul className={tableMapStyles}>
                  {Object.values(country.languages).map((lang: string) => {
                    return <li key={JSON.stringify(lang)}>{lang}</li>;
                  })}
                </ul>
              </div>
              <div style={gridItemStyle}>
                <TableTitle textValue="Currencies" />
                <ul className={tableMapStyles}>
                  {Object.values(country.currencies).map((curr: any) => {
                    return (
                      <li key={JSON.stringify(curr)}>
                        {curr.name} ({curr.symbol})
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div style={gridItemStyle}>
                <TableTitle textValue="Capitals" />
                <ul>
                  {Object.values(country.capital).map((lang: string) => {
                    return <li key={JSON.stringify(lang)}>{lang}</li>;
                  })}
                </ul>
              </div>
              <div style={gridItemStyle}>
                <TableTitle textValue="Region" />
                <div>{country.region}</div>
              </div>
              <div style={gridItemStyle}>
                <TableTitle textValue="Subregion" />
                <div>{country.subregion}</div>
              </div>
              <div style={gridItemStyle}>
                {" "}
                <TableTitle textValue="Area" />
                <div>{country.area.toFixed(2)}</div>
              </div>
              <div style={gridItemStyle}>
                <TableTitle textValue="Area" />
                <div>{country.area.toFixed(2)}</div>
              </div>
              <div style={gridItemStyle}>
                <TableTitle textValue="Latitude" />
                <div>{country.latlng[0].toFixed(1)}</div>
              </div>
              <div style={gridItemStyle}>
                <TableTitle textValue="Longitude" />
                <div>{country.latlng[1].toFixed(1)}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
