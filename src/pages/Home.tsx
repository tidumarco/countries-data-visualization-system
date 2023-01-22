import React, { useEffect } from "react";

import { Link } from "react-router-dom";

export default function Home(props: any) {
  useEffect(() => (document.title = props.title), [props.title]);
  return (
    <>
      <h1>This is the home page</h1>
      <ul>
        <li>
          <Link to="data-by-region">Data by region</Link>
        </li>
        <li>
          <Link to="data-by-country">Data by country</Link>
        </li>
      </ul>
    </>
  );
}
