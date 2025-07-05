import React from "react";

const attendanceData = [
  { no: 1, day: "Thursday", date: "01 May 2025", checkIn: "A", checkOut: "A", status: "Absent" },
  { no: 2, day: "Thursday", date: "08 May 2025", checkIn: "09:46 AM", checkOut: "19:14 PM", status: "Full Day" },
  { no: 3, day: "Saturday", date: "10 May 2025", checkIn: "WO-II", checkOut: "WO-II", status: "WO-II" },
  { no: 4, day: "Thursday", date: "01 May 2025", checkIn: "A", checkOut: "A", status: "Absent" },
  { no: 5, day: "Thursday", date: "08 May 2025", checkIn: "09:46 AM", checkOut: "19:14 PM", status: "Full Day" },
  { no: 6, day: "Saturday", date: "10 May 2025", checkIn: "WO-II", checkOut: "WO-II", status: "WO-II" },
  { no: 7, day: "Thursday", date: "01 May 2025", checkIn: "A", checkOut: "A", status: "Absent" },
  { no: 8, day: "Thursday", date: "08 May 2025", checkIn: "09:46 AM", checkOut: "19:14 PM", status: "Full Day" },
  { no: 9, day: "Saturday", date: "10 May 2025", checkIn: "WO-II", checkOut: "WO-II", status: "WO-II" },
  { no: 10, day: "Saturday", date: "10 May 2025", checkIn: "WO-II", checkOut: "WO-II", status: "WO-II" },
];

function Punch_Details() {
  return (
    <div className="bg-black text-white min-h-screen container  rounded-md mx-auto p-5">
      <h1 className="text-2xl p-3 rounded-md">Attendance List</h1>
      <div className="mt-3 p-3 rounded-md bg-neutral-900">
        <div className="flex items-center justify-between gap-5 ">
          <div>
          <p className="text-xl">Date :<span className=" text-lg"> May,2025</span></p>
          
          </div>
          <div className="text-end my-4">
          <label className="text-lg font-bold mr-2">Search:</label>
          <input type="text" className="border py-1 rounded-md bg-neutral-800 text-white" />
        </div>
        </div>
        
        <div className="overflow-x-auto mt-6 rounded-md">
  <table className="min-w-full border-collapse border rounded-md text-sm sm:text-base">
    <thead className="bg-neutral-950">
      <tr>
        <th className="border px-2 py-2">No.</th>
        <th className="border px-2 py-2">Day</th>
        <th className="border px-2 py-2">Date</th>
        <th className="border px-2 py-2">Check In</th>
        <th className="border px-2 py-2">Check Out</th>
        <th className="border px-2 py-2">Status</th>
      </tr>
    </thead>
    <tbody>
      {attendanceData.map((row, index) => (
        <tr key={index} className="text-center">
          <td className="border px-4 py-2 shrink-0">{row.no}</td>
          <td className="border px-4 py-2 shrink-0">{row.day}</td>
          <td className="border px-4 py-2 shrink-0">{row.date}</td>
          <td className="border px-4 py-2 shrink-0">{row.checkIn}</td>
          <td className="border px-4 py-2 shrink-0">{row.checkOut}</td>
          <td className="border px-4 py-2 shrink-0">
            <span className={`px-2 py-1 rounded font-semibold
              ${row.status === 'Absent' ? 'text-red-600' : ''}
              ${row.status === 'Full Day' ? 'text-green-600' : ''}
              ${row.status.includes('WO') ? 'text-yellow-400' : ''}
            `}>
              {row.status}
            </span>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

      </div>
    </div>
  );
}

export default Punch_Details;
