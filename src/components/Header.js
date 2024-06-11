import React from "react";
import { logo } from "../images";

export default function Header() {
  return (
    <>
      <header className="flex justify-center items-center flex-col">
        <div className="mx-auto flex flex-col items-center h-16 max-w-screen-xl gap-4 px-4 sm:px-6 lg:px-8 ">
          <div className="flex items-center">
            <a href="/" className="block text-violet-700 flex items-center">
              <img src={logo} alt="logo" className="logo" />
              Zindagi.ai
            </a>
          </div>
          
          <div className="flex flex-1 items-center justify-center md:justify-between w-full underline underline-offset-4">
            <nav className="md:block">
              <ul className="flex flex-wrap items-center gap-6 text-sm justify-center">
                <li>
                  <a href="/" className="text-violet-700 transition hover:text-gray-700">Home</a>
                </li>
                <li>
                  <a href="/" className="text-violet-700 transition hover:text-gray-700">Heart Disease</a>
                </li>
                <li>
                  <a href="/" className="text-violet-700 transition hover:text-gray-700">Diabetes Disease</a>
                </li>
                <li>
                  <a href="/" className="text-violet-700 transition hover:text-gray-700">Maternal Health</a>
                </li>
                <li>
                  <a href="/" className="text-violet-700 transition hover:text-gray-700">Breast Cancer</a>
                </li>
                <li>
                  <a href="/" className="text-violet-700 transition hover:text-gray-700">Brain Tumor</a>
                </li>
                <li>
                  <a href="/" className="text-violet-700 transition hover:text-gray-700">Pneumonia</a>
                </li>
                <li>
                  <a href="/" className="text-violet-700 transition hover:text-gray-700">Kidney</a>
                </li>
                <li>
                  <a href="/" className="text-violet-700 transition hover:text-gray-700">Liver</a>
                </li>
                {/* <li>
                  <a href="/" className="text-violet-700 transition hover:text-gray-700">Alzheimer</a>
                </li> */}
                {/* <li>
                      <a href="/" className="text-violet-700 transition hover:text-gray-700">Suicide Depression</a>
                    </li>
                    <li>
                      <a href="/" className="text-violet-700 transition hover:text-gray-700">Medical Insurance</a>
                    </li>
                    <li>
                      <a href="/" className="text-violet-700 transition hover:text-gray-700">Calories Burnt</a>
                    </li>
                    <li>
                      <a href="/" className="text-violet-700 transition hover:text-gray-700">Patient Survival</a>
                    </li>
                    <li>
                      <a href="/" className="text-violet-700 transition hover:text-gray-700">Diet Recommendation</a>
                    </li> */}
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
