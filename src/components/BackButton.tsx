import React from "react";
import { Link } from "react-router-dom";

function BackButton() {
  return (
    <Link
      className="inline-block mt-4 ml-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-1 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      to="/"
    >
      Home
    </Link>
  );
}

export default BackButton;
