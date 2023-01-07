import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../contexts/theme";

export default function Header() {
  const { isDarkTheme, toggleThemeHandler } = useContext(ThemeContext);
  return (
    <header className="py-5 bg-blue-600  dark:bg-blue-800  text-white">
      <nav className="flex justify-between">
        <span className="text-2xl ml-4">Cookie Stand Admin</span>
        <div className="flex justify-between mr-8">
          <ul className="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
            <li>
              <a
                href="/"
                className="md:bg-transparent text-white text-xl block pl-3 pr-4 py-2 md:text-sky-400 md:p-0 rounded"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="about"
                className="text-white text-xl hover:bg-blue-50 border-b border-blue-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-sky-400 md:p-0"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="service"
                className="text-white text-xl hover:bg-blue-50 border-b border-blue-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-sky-400 md:p-0"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="contact"
                className="text-white text-xl hover:bg-blue-50 border-b border-blue-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-sky-400 md:p-0"
              >
                Contact
              </a>
            </li>
          </ul>

          <button
            class="w-20 h-10 rounded-full bg-white flex items-center transition duration-300 focus:outline-none shadow ml-6"
            onClick={toggleThemeHandler}
          >
            <div
              id="switch-toggle"
              class="w-10 h-10 relative rounded-full transition duration-500 transform bg-yellow-500 -translate-x-2 p-1 text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </div>
          </button>
        </div>
      </nav>
    </header>
  );
}