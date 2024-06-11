import React from "react";
import { logo } from "../images";

export default function Footer() {
  return (
    <>
      <footer className="bg-white">
        <div className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24">
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center text-violet-600">
              <a href="/" className="block text-violet-700 flex items-center">
                <img src={logo} alt="logo" className="logo" />
                Zindagi.ai
              </a>
            </div>
            <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12 underline underline-offset-8">
              <li>
                <a className="text-violet-700 transition hover:text-gray-700/75" href="/"> Github </a>
              </li>
              <li>
                <a className="text-violet-700 transition hover:text-blue-700/75" href="/"> LinkedIn </a>
              </li>
              <li>
                <a className="text-violet-700 transition hover:text-red-700/75" href="/"> Back to Top </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
