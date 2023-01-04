import React from "react";
import { useState } from "react";

export default function AdminForm() {
  const [location, setLocation] = useState("");
  const [minCustomers, setMinCustomers] = useState("");
  const [maxCustomers, setMaxCustomers] = useState("");
  const [avgCookies, setAvgCookies] = useState("");
  const [allOutputs, setAllOutputs] = useState([]);

  const handleLocation = (e) => {
    setLocation(e.target.value);
  };

  const handleMinCustomers = (e) => {
    setMinCustomers(e.target.value);
  };

  const handleMaxCustomers = (e) => {
    setMaxCustomers(e.target.value);
  };

  const handleAvgCookies = (e) => {
    setAvgCookies(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // const outpute = `{"location": "${location}","minCustomers":${minCustomers},"maxCustomers":${maxCustomers},"avgCookies":${avgCookies}}`;
    const output = {
      _location: location || "None",
      min_customers: minCustomers || "None",
      max_customers: maxCustomers || "None",
      avg_cookies: avgCookies || "None",
    };
    setAllOutputs([...allOutputs, output]);
  };

  return (
    <div>
      <section className=" flex justify-center ">
        <form
          onSubmit={handleSubmit}
          class="relative flex flex-col break-words mb-6 rounded-lg bg-blue-400 rounded-3xl shadow-2xl w-4/5"
        >
          <div className="mt-7 mb-10 text-center border-b-2 ">
            <span className=" text-xl  text-blue-800 rounded-3xl border-1 border-blue-300 bg-blue-300 py-4 px-5 shadow-lg">
              Create Cookie Stand
            </span>
          </div>
          <div className=" flex justify-center">
            <label className=" text-xl  text-blue-800 rounded-3xl border-1 border-blue-400 bg-blue-500 py-4 px-5 shadow-lg w-2/5 ml-2 pl-10">
              Location
            </label>
            <input
              type="text"
              name="location"
              onChange={handleLocation}
              className=" text-xl  text-blue-800 rounded-3xl border-1 border-blue-100 bg-blue-100 py-4 px-5 shadow-lg w-3/5 ml-20 pl-10 mr-2"
            ></input>
          </div>
          <div className=" flex justify-center mt-1">
            <label className=" text-xl  text-blue-800 rounded-3xl border-1 border-blue-400 bg-blue-500 py-4 px-5 shadow-lg w-2/5 ml-2 pl-10">
              Minimum Customers per Hour
            </label>
            <input
              type="text"
              name="minCustomers"
              onChange={handleMinCustomers}
              className=" text-xl  text-blue-800 rounded-3xl border-1 border-blue-100 bg-blue-100 py-4 px-5 shadow-lg w-3/5 ml-20 pl-10 mr-2"
            ></input>
          </div>
          <div className=" flex justify-center mt-1">
            <label className=" text-xl  text-blue-800 rounded-3xl border-1 border-blue-400 bg-blue-500 py-4 px-5 shadow-lg w-2/5 ml-2 pl-10">
              Maximum Customers per Hour
            </label>
            <input
              type="text"
              name="maxCustomers"
              onChange={handleMaxCustomers}
              className=" text-xl  text-blue-800 rounded-3xl border-1 border-blue-100 bg-blue-100 py-4 px-5 shadow-lg w-3/5 ml-20 pl-10 mr-2"
            ></input>
          </div>
          <div className=" flex justify-center mt-1">
            <label className=" text-xl  text-blue-800 rounded-3xl border-1 border-blue-400 bg-blue-500 py-4 px-5 shadow-lg w-2/5 ml-2 pl-10">
              Average Cookies per Sale
            </label>
            <input
              type="text"
              name="avgCookies"
              onChange={handleAvgCookies}
              className=" text-xl  text-blue-800 rounded-3xl border-1 border-blue-100 bg-blue-100 py-4 px-5 shadow-lg w-3/5 ml-20 pl-10 mr-2"
            ></input>
          </div>
          <div className="my-4 text-right mr-4 ">
            <button className=" text-xl  text-blue-200 rounded-3xl border-1 border-indigo-200 bg-sky-700 py-4 px-5 shadow-lg hover:bg-sky-500">
              Create 
            </button>
          </div>
        </form>
      </section>
      <section>
        <table className=" items-center pt-20 pr-48 pb-24 pl-16 gap-24 border-solid ml-40 my-20 ">
          <tr>
            <th className="text-left p-3 text-xl bg-blue-700 text-white border-solid border-2 border-blue-400">
              Location
            </th>
            <th className="text-left p-3 text-xl bg-blue-700 text-white border-solid border-2 border-blue-400">
              Minimum Customers per Hour
            </th>
            <th className="text-left p-3 text-xl bg-blue-700 text-white border-solid border-2 border-blue-400">
              Maximum Customers per Hour
            </th>
            <th className="p-3 text-xl bg-blue-700 text-white border-solid border-2 border-blue-400">
              Average Cookies per Sale
            </th>
          </tr>

          {allOutputs.length > 0 &&
            allOutputs.map((item) => {
              return (
                <tr>
                  <td className="p-3 text-xl text-blue-700 border-solid border-2 border-blue-400">
                    {item._location}
                  </td>
                  <td className="p-3 text-xl text-blue-700 border-solid border-2 border-blue-400">
                    {item.min_customers}
                  </td>
                  <td className="p-3 text-xl text-blue-700 border-solid border-2 border-blue-400">
                    {item.max_customers}
                  </td>
                  <td className="p-3 text-xl text-blue-700 border-solid border-2 border-blue-400">
                    {item.avg_cookies}
                  </td>
                </tr>
              );
            })}
        </table>
      </section>
    </div>
  );
}