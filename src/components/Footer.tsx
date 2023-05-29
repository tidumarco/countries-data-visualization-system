import React from "react";

const linkedinUrl = "https://www.linkedin.com/in/marco-tidu-0310398b/";
const githubUrl = "https://github.com/tidumarco";
const mailTo = "mailto:tidumarco@gmail.com";

function Footer() {
  return (
    <footer className="bg-white w-full rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2023 Marco Tidu. All Rights Reserved.
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
          <a href={linkedinUrl} className="mr-4 hover:underline md:mr-6 ">
            Linkedin
          </a>
        </li>
        <li>
          <a href={githubUrl} className="mr-4 hover:underline md:mr-6">
            Github
          </a>
        </li>

        <li>
          <a href={mailTo} className="hover:underline">
            Contact
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
