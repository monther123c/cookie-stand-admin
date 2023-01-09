import React from "react";
import { useState ,useMemo} from "react";
import { data } from "./data.js"; 
import {Cookie_admin } from "../custom_hooks/TotalCol.js";

export default function CreateForm(props) {
  const [location, setLocation] = useState("");
  const [minCustomers, setMinCustomers] = useState("");
  const [maxCustomers, setMaxCustomers] = useState("");
  const [avgCookies, setAvgCookies] = useState("");


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
    // const output = `{"location": "${location}","minCustomers":${minCustomers},"maxCustomers":${maxCustomers},"avgCookies":${avgCookies}}`;
  //   const Cookie = data.reduce((acc, item)=>{
  //     if(item[location]) acc = item[location] 
  //     console.log(item)
  //     return acc;
  // },"")
  const cookie = Cookie_admin(data, location)
  // console.log(cookie)
    const output = {
      _location: location || "Amman",
      min_customers: minCustomers || "None",
      max_customers: maxCustomers || "None",
      avg_cookies: avgCookies || "None",
      hourlySales: cookie || [48,42,30,24,42,24,36,42,42,48,36,42,24,36,516],
      
    };
    props.getUserInput(output);
  //   console.log(output);

  };

  return (
    <div>
      <section className=" flex justify-center ">
        <form
          onSubmit={handleSubmit}
          className="relative flex flex-col break-words mb-6 rounded-lg bg-blue-300 dark:bg-blue-500 rounded-3xl shadow-2xl w-4/5"
        >
          <div className="mt-7 mb-10 text-center border-b-2 dark:border-black ">
            <span className=" text-xl  text-blue-800 rounded-3xl border-1 border-blue-300 bg-blue-200 dark:bg-blue-400  py-4 px-5 shadow-lg">
              Create Cookie Stand
            </span>
          </div>
          <div className=" flex justify-center">
            <label className=" text-xl  text-blue-800 dark:text-blue-200  rounded-3xl border-1 border-blue-400 bg-blue-300 dark:bg-blue-700 py-4 px-5 shadow-lg w-2/5 ml-2 pl-10">
              Location
            </label>
            <input
              type="text"
              name="location"
              onChange={handleLocation}
              className=" text-xl  text-blue-800 dark:text-blue-100 rounded-3xl border-1 border-blue-100 dark:bg-blue-400 bg-blue-100 py-4 px-5 shadow-lg w-3/5 ml-20 pl-10 mr-2"
            ></input>
          </div>
          <div className=" flex justify-center mt-1">
            <label className=" text-xl  text-blue-800 dark:text-blue-200  rounded-3xl border-1 border-blue-400 bg-blue-300 dark:bg-blue-700 py-4 px-5 shadow-lg w-2/5 ml-2 pl-10">
              Minimum Customers per Hour
            </label>
            <input
              type="text"
              name="minCustomers"
              onChange={handleMinCustomers}
              className=" text-xl dark:text-blue-100 text-blue-800 rounded-3xl border-1 border-blue-100 dark:bg-blue-400 bg-blue-100 py-4 px-5 shadow-lg w-3/5 ml-20 pl-10 mr-2"
            ></input>
          </div>
          <div className=" flex justify-center mt-1">
            <label className=" text-xl  text-blue-800 dark:text-blue-200  rounded-3xl border-1 border-blue-400 bg-blue-300 dark:bg-blue-700 py-4 px-5 shadow-lg w-2/5 ml-2 pl-10">
              Maximum Customers per Hour
            </label>
            <input
              type="text"
              name="maxCustomers"
              onChange={handleMaxCustomers}
              className=" text-xl dark:text-blue-100 text-blue-800 rounded-3xl border-1 border-blue-100 dark:bg-blue-400 bg-blue-100 py-4 px-5 shadow-lg w-3/5 ml-20 pl-10 mr-2"
            ></input>
          </div>
          <div className=" flex justify-center mt-1">
            <label className=" text-xl  text-blue-800 dark:text-blue-200  rounded-3xl border-1 border-blue-400 bg-blue-300 dark:bg-blue-700 py-4 px-5 shadow-lg w-2/5 ml-2 pl-10">
              Average Cookies per Sale
            </label>
            <input
              type="text"
              name="avgCookies"
              onChange={handleAvgCookies}
              className=" text-xl dark:text-blue-100 text-blue-800 rounded-3xl border-1 border-blue-100 dark:bg-blue-400 bg-blue-100 py-4 px-5 shadow-lg w-3/5 ml-20 pl-10 mr-2"
            ></input>
          </div>
          <div className="my-4 text-right mr-4 ">
            <button className=" text-xl  text-blue-700 rounded-3xl border-1 border-indigo-200 bg-sky-400 dark:text-blue-100 dark:hover:bg-sky-400 dark:bg-sky-700 py-4 px-5 shadow-lg hover:bg-sky-200 hover:text-blue-600">
              Create
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}