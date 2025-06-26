import React, { useState } from "react";

const dsrData = [
  {
    id: 1,
    date: "20-06-2025 (07:04 PM)",
    project: "medtrack",
    description:
      "The medtrack Project - University Hospital Management Application is a software designed to manage the processes carried out in a university hospital.",
    tasks: [
      "Working on Hospitalization | Internal Patient screen API",
      "Creating get API (In-progress)",
      "Helping Team mate",
      "Resolve/merge conflict",
    ],
  },
  {
    id: 2,
    date: "19-06-2025 (07:08 PM)",
    project: "medtrack",
    description:
      "The medtrack Project - University Hospital Management Application is a software designed to manage the processes carried out in a university hospital.",
    tasks: [
      "Working on Hospitalization | Release Bed Cleaning screen API",
      "Creating get API (In-progress)",
      "Helping Team mate",
    ],
  },
  {
    id: 3,
    date: "18-06-2025 (07:01 PM)",
    project: "medtrack",
    description:
      "The medtrack Project - University Hospital Management Application is a software designed to manage the processes carried out in a university hospital.",
    tasks: [
      "Working on Hospitalization | Search Cancel Hospitalization screen API",
      "Creating get API (In-progress)",
      "Helping Team mate",
      "Resolve/merge conflict",
    ],
  },
  {
    id: 4,
    date: "17-06-2025 (07:07 PM)",
    project: "medtrack",
    description:
      "The medtrack Project - University Hospital Management Application is a software designed to manage the processes carried out in a university hospital.",
    tasks: [
      "Working on Hospitalization | Search Cancel Hospitalization screen API",
      "Creating get API (In-progress)",
      "Helping Team mate",
      "Working on project timeline sheet",
    ],
  },
];

const DSR_List = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = dsrData.filter((entry) =>
    entry.project.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen text-white rounded-md  p-4  bg-black">
      <h1 className="text-2xl font-bold mb-4   ">DSR LIST</h1>
      <div className="mb-5 ">
        <label className="text-lg font-bold mr-2">Select Date</label>
        <input type="date" className="border p-1 rounded" />
      </div>
      <div className="flex flex-wrap justify-between items-center mb-4 gap-4">
        <div>
          <label className="text-md font-medium mr-2">Show</label>
          <select className="border p-1 rounded">
            <option>10</option>
            <option>20</option>
            <option>30</option>
          </select>
          <span className="ml-2 text-lg">entries</span>
        </div>

        <div className="ml-auto">
          <label className="text-md font-medium mr-2">Search:</label>
          <input
            type="text"
            placeholder="Search project..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border p-1 rounded"
          />
        </div>
      </div>

      <div className="overflow-x-auto  border rounded-md  ">
        <table className="min-w-full  shadow rounded-lg">
          <thead className="bg-neutral-800">
            <tr className="text-left text-sm font-semibold">
              <th className="p-3">No.</th>
              <th className="p-3">Date</th>
              <th className="p-3">Project Name</th>
              <th className="p-3">Project Description</th>
              <th className="p-3">To Do Task</th>
            </tr>
          </thead>
          <tbody className="text-sm bg-neutral-800">
            {filteredData.map((entry) => (
              <tr key={entry.id} className="border-t hover:bg-neutral-700">
                <td className="p-3">{entry.id}</td>
                <td className="p-3">{entry.date}</td>
                <td className="p-3">{entry.project}</td>
                <td className="p-3">{entry.description}</td>
                <td className="p-3">
                  <ul className="list-disc ml-5 space-y-1">
                    {entry.tasks.map((task, i) => (
                      <li key={i}>{task}</li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-center text-xs text-gray-500 mt-10">
        Copyright © TheSecured Pvt. Ltd. 2025
      </p>
    </div>
  );
};

export default DSR_List;
