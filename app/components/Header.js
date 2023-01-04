import React from "react";

export default function Header() {
  return (
    <header className="py-5 bg-blue-700 text-white">
      <nav className='flex justify-between' >
          <span className='text-2xl ml-4' >Cookie Stand Admin</span>
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
        </div>
      </nav>
    </header>
  );
}