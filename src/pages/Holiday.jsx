// import React from "react";

// const holidays = [
//   { sr: 1, name: "New Year", date: "01-01-2025", weekday: "Wednesday" ,  },
//   { sr: 2, name: "Makar Sankranti", date: "14-01-2025", weekday: "Tuesday" },
//   { sr: 3, name: "Republic Day", date: "26-01-2025", weekday: "Sunday" },
//   { sr: 4, name: "Holi", date: "14-03-2025", weekday: "Friday" },
//   { sr: 5, name: "Eid (for Muslim employees)", date: "07-06-2025", weekday: "Saturday" },
//   { sr: 6, name: "Raksha Bandhan", date: "08-08-2025", weekday: "Saturday" },
//   { sr: 7, name: "Independence Day", date: "15-08-2025", weekday: "Friday" },
//   { sr: 8, name: "Diwali", date: "20-10-2025", weekday: "Monday" },
//   { sr: 9, name: "Govardhan Puja", date: "22-10-2025", weekday: "Wednesday" },
//   { sr: 10, name: "Bhai Dooj", date: "23-10-2025", weekday: "Thursday" },
//   { sr: 11, name: "Christmas", date: "25-12-2025", weekday: "Thursday" },
// ];
// function Holiday() {
//   return (
//     <div className="sm:p-6 rounded-md bg-black text-gray-200">
//       <h2 className="text-xl pb-3 rounded-md  sm:text-2xl font-semibold mb-4">All Official Holidays</h2>
//       <div className="flex sm:text-base  rounded-md justify-between p-5 bg-neutral-900">
//         <input className="border rounded-md mb-5 px-3 font-bold text-xl py-2" type="text" value={"2025"} readOnly/>
//         <input  className="border rounded-md mb-5 px-3 font-bold text-xl py-2" type="text" value={"Search"} readonly/>
//       </div>

//       {/* Responsive Table */}
//       <div className="overflow-x-auto p-5 bg-neutral-900">
//         <table className="min-w-full border  border-gray-300 text-sm sm:text-base">
//           <thead>
//             <tr className="bg-neutral-950 text-left">
//               <th className="border px-4 py-2">Sr.No</th>
//               <th className="border px-4 py-2">Holiday Name</th>
//               <th className="border px-4 py-2">Date</th>
//               <th className="border px-4 py-2">Weekday</th>
//             </tr>
//           </thead>
//           <tbody>
//             {holidays.map((h,index) => (
//               <tr key={index} className="bg-neutral-800 hover:bg-neutral-700">
//                 <td className="border px-4 py-2">{h.sr}</td>
//                 <td className="border px-4 py-2 ">{h.name}</td>
//                 <td className="border px-4 py-2">{h.date}</td>
//                 <td className="border px-4 py-2">{h.weekday}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default Holiday;

import React, { useEffect, useState } from "react";

const Holiday = () => {
  const [holidays, setHolidays] = useState([]);

  useEffect(() => {
    const fetchHolidays = async () => {
      try {
        const res = await fetch("http://localhost:8001/api/holidays");
        const data = await res.json();
        setHolidays(data);
      } catch (error) {
        console.error("Failed to fetch holidays", error);
      }
    };

    fetchHolidays();
  }, []);

  return (
    <div className="sm:p-6 min-h-screen rounded-md  bg-black text-gray-200">
      <h2 className="text-xl pb-3 rounded-md  sm:text-2xl font-semibold mb-4">
        All Official Holidays
      </h2>
      <div className="flex sm:text-base  rounded-md justify-between p-5 bg-neutral-900">
        <input
          className="border rounded-md mb-5 px-3 font-bold text-xl py-2"
          type="text"
          value={"2025"}
          readOnly
        />
        <input
          className="border rounded-md mb-5 px-3 font-bold text-xl py-2"
          type="text"
          value={"Search"}
          readonly
        />
      </div>
      <div className="overflow-x-auto p-5 bg-neutral-900">
        <table className="table-auto w-full border-collapse border border-gray-700">
          <thead>
            <tr>
              <th className="border border-gray-700 px-4 py-2">Sr.No</th>
              <th className="border border-gray-700 px-4 py-2">Holiday Name</th>
              <th className="border border-gray-700 px-4 py-2">Date</th>
              <th className="border border-gray-700 px-4 py-2">Weekday</th>
            </tr>
          </thead>
          <tbody>
            {holidays.map((holiday, index) => (
              <tr key={index}>
                <td className="border border-gray-700 px-4 py-2">
                  {index + 1}
                </td>
                <td className="border border-gray-700 px-4 py-2">
                  {holiday.name}
                </td>
                <td className="border border-gray-700 px-4 py-2">
                  {holiday.date}
                </td>
                <td className="border border-gray-700 px-4 py-2">
                  {holiday.weekday}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Holiday;
