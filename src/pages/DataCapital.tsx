import React, { useEffect } from "react";

export default function DataCapital(props: any) {
  useEffect(() => (document.title = props.title), [props.title]);
  return <div className="App">Data Capital here</div>;
}
