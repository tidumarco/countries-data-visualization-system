import React from "react";

import { SearchAppBarProps } from "../types";

export default function SearchAppBar({ handleChange }: SearchAppBarProps) {
  return (
    <div>
      <input color="secondary" onChange={handleChange} />
    </div>
  );
}
