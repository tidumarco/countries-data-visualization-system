import React from "react";

import { BasicTable } from "../types";

export default function CountryTable({ filter }: BasicTable) {
  if (!filter) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <div>
          {filter.map((country) => (
            <div key={country.cca2}>
              <div>{country.name.common}</div>
              <div>
                <img
                  src={country.flags.png}
                  alt={country.name.common}
                  style={{ height: "100px", display: "flex" }}
                />
                <div>
                  <div>Coat of arms</div>
                  <img
                    src={country.coatOfArms.png}
                    alt={country.name.common}
                    style={{ height: "50px", display: "flex" }}
                  />
                </div>
              </div>
              <div>
                <div>Languages</div>
                <div>
                  <ul>
                    {Object.values(country.altSpellings).map((lang: string) => {
                      return <li key={JSON.stringify(lang)}>{lang}</li>;
                    })}
                  </ul>
                </div>
              </div>
              <div>
                <div>Currencies</div>
                <div>
                  <ul>
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
              <div>
                <div>Capitals</div>
                <div>
                  <ul>
                    {Object.values(country.capital).map((lang: string) => {
                      return <li key={JSON.stringify(lang)}>{lang}</li>;
                    })}
                  </ul>
                </div>
              </div>
              <div>
                <div>Population</div>
                <div>{country.population.toLocaleString()}</div>
              </div>
              <div>
                <div>Region</div>
                <div>{country.region}</div>
              </div>
              <div>
                <div>Sub Region</div>
                <div>{country.subregion}</div>
              </div>
              <div>
                <div>
                  <div>Area</div>
                  {country.area.toFixed(2)}
                </div>
              </div>
              <div>
                <div>Latitude</div>
                <div>{country.latlng[0].toFixed(1)}</div>
              </div>
              <div>
                <div>Longitude</div>
                <div>{country.latlng[1].toFixed(1)}</div>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }
}
