"use client";
import CreateForm from "./components/CreateForm";
import ReportTable from "./components/ReportTable";
import { useState, useContext } from "react";
import { removeDuplicates } from "./custom_hooks/TotalCol";
import LoginForm from "./components/LoginForm";
import { AuthContext } from "./contexts/auth";

export default function Home() {
  const [allOutputs, setAllOutputs] = useState([]);
  const [keyValue, setKeyValue] = useState(0);
  const { tokens } = useContext(AuthContext);

  function getUserInput(userInput) {
    setKeyValue(keyValue + 1);
    const output = {
      key: keyValue,
      _location: userInput._location,
      hourlySales: userInput.hourlySales,
    };
    setAllOutputs([...allOutputs, output]);
  }
  let Locations = removeDuplicates(allOutputs);

  return (
    <main className="dark:bg-black">
      {tokens ? (
        <>
          <div className="flex-1 overflow-y-auto p-5 dark:bg-black">
            <CreateForm getUserInput={getUserInput} />
            <ReportTable allOutputs={allOutputs} />
          </div>

          <div className="py-5 bg-blue-600  dark:bg-blue-800 text-center text-white ">
            <p className="ml-6 float-left">
              {Locations.length > 0
                ? `${Locations.length} Locations world wide`
                : "0 Location world wide"}
            </p>
          </div>
        </>
      ) : (
        <LoginForm />
      )}
    </main>
  );
}