import React from "react";

import { BasicTable } from "../types";

export default function CountryTable({ filter }: BasicTable) {
  if (!filter) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          {filter.map((country) => (
            <div key={country.cca2}>
              <div className="flex flex-col items-center">
                <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {country.name.common}
                </h1>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src={country.flags.png}
                  alt={country.name.common}
                  style={{ height: "100px", display: "flex" }}
                />
                <div className="flex flex-col items-center">
                  <h1 className="p-2 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Coat of arms
                  </h1>
                  <img
                    src={country.coatOfArms.png}
                    alt={country.name.common}
                    style={{ height: "50px", display: "flex" }}
                  />
                </div>
              </div>
              <div className="flex flex-col items-center">
                <h1 className="p-2 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Languages
                </h1>
                <div>
                  <ul className="max-w-md space-y-1 text-black list-disc list-inside dark:text-gray-400">
                    {Object.values(country.languages).map((lang: string) => {
                      return <li key={JSON.stringify(lang)}>{lang}</li>;
                    })}
                  </ul>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <h1 className="p-2 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Currencies
                </h1>
                <div>
                  <ul className="max-w-md space-y-1 text-black list-disc list-inside dark:text-gray-400">
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
                <h1 className="p-2 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Capitals
                </h1>
                <div>
                  <ul>
                    {Object.values(country.capital).map((lang: string) => {
                      return <li key={JSON.stringify(lang)}>{lang}</li>;
                    })}
                  </ul>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <h1 className="p-2 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Population
                </h1>
                <div>{country.population.toLocaleString()}</div>
              </div>
              <div className="flex flex-col items-center">
                <h1 className="p-2 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Region
                </h1>
                <div>{country.region}</div>
              </div>
              <div className="flex flex-col items-center">
                <h1 className="p-2 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Sub Region
                </h1>
                <div>{country.subregion}</div>
              </div>
              <div className="flex flex-col items-center">
                <h1 className="p-2 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Area
                </h1>
                {country.area.toFixed(2)}
              </div>
              <div className="flex flex-col items-center">
                <h1 className="p-2 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Latitude
                </h1>
                <div>{country.latlng[0].toFixed(1)}</div>
              </div>
              <div className="flex flex-col items-center">
                <h1 className="p-2 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Longitude
                </h1>
                <div>{country.latlng[1].toFixed(1)}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
