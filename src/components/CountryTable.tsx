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

function CountryTable({ filter }: BasicTable) {
  return (
    <div>
      <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        {filter.map((country) => (
          <div key={country.cca2}>
            <TableTitle textValue={country.name.common} />
            <div className="flex flex-col items-center">
              <TableImage
                src={country.flags.png}
                alt={country.name.common}
                style={flagStyles}
              />
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
        ))}
      </div>
    </div>
  );
}

export default CountryTable;
