import { useState } from 'react'
import Employees from "./components/Employees/";

const App = () => {
  const employees = [
    {
      name: "Ryle",
      position: "Manager",
      salary: 10000,
      status: "Active",
    },
    {
      name: "Aaron",
      position: "Developer",
      salary: 20000,
      status: "Active",
    },
    {
      name: "James",
      position: "Designer",
      salary: 30000,
      status: "Active",
    },
    { name: "Rodel Celis", position: "Developer", status: "Not Active" },
    { name: "Jei Navarro", position: "Manager", status: "Not Active" },
    {
      name: "David",
      position: "Manager",
      salary: 40000,
      status: "Active",
    },
    {
      name: "Dave",
      position: "Developer",
      salary: 50000,
      status: "Active",
    },
    {
      name: "Jim",
      position: "Manager",
      salary: 60000,
      status: "Active",
    },
    {
      name: "Steven",
      position: "Designer",
      salary: 70000,
      status: "Active",
    },
    {
      name: "Jack",
      position: "Developer",
      salary: 80000,
      status: "Active",
    },
  ];

  return (
    <div className="App">
      <Employees employees={employees} />
    </div>
  );
};

export default App
