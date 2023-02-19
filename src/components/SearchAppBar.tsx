import * as React from "react";

import { SearchAppBarProps } from "../types";

export default function SearchAppBar({ handleChange }: SearchAppBarProps) {
  return (
    <div style={{ flexGrow: 1 }}>
      <div>
        <div>
          <div
            style={{
              flexGrow: 1,

              padding: "10px",
            }}
          >
            Please search for a country...
          </div>

          <input
            color="secondary"
            style={{
              width: "30%",
            }}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
}
