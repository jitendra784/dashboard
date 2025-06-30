import { useEffect, useState } from "react"; //
import { FaInbox, FaPen } from "react-icons/fa";
import { LuSend } from "react-icons/lu";
function ResignList() {
  const [resign, setResign] = useState([]);
  const fetchResign = async () => {
    try {
      const res = await fetch("http://localhost:8001/api/resign");
      const data = await res.json();
      setResign(data);
    } catch (error) {
      console.error("failed to fetch holidays", error);
    }
  };
  // useeffect only call it on mount
  useEffect(() => {
    fetchResign();
  }, []);

  return (
    <div className="h-screen bg-black text-white p-5 rounded-md">
      <h2 className="text-xl mb-10 pb-3 rounded-md sm:text-2xl font-semibold ">
        Resign Section
      </h2>
      <div className="flex justify-end">
        <button className="border mr-2 px-4 py-2 w-30 flex gap-3 items-center bg-blue-700 rounded-md ">
          <FaInbox />
          Inbox
        </button>
        <button className="border mr-2 px-4 py-2 w-30 flex gap-3 items-center bg-blue-700 rounded-md ">
          <span>
            <LuSend />
          </span>{" "}
          Sent
        </button>
        <button className="border px-4 py-2 w-30 flex gap-3 items-center bg-blue-700 rounded-md ">
          <FaPen  />
          Compose
        </button>
      </div>
      <div className="flex justify-end mt-5">
        <label className="font-bold text-xl mr-3 ">Search </label>
        <input type="text" className="border h-10 rounded-md w-60" />
      </div>
      <div>
        <table className="table-auto mt-10 w-full border-collapse border border-gray-300">
          <thead>
            <tr className="text-center border">
              <th className="border text-lg px-4 py-2">No.</th>
              <th className="border text-lg px-4 py-2">Subject</th>
              <th className="border text-lg px-4 py-2">From</th>
              <th className="border text-lg px-4 py-2">Date</th>
            </tr>
          </thead>
          <tbody>
            {resign.map((resign, index) => (
              <tr className="text-center border" key={index}>
                <td>{index + 1}</td>
                <td>{resign.from}</td>
                <td>{resign.subject}</td>
                <td>{resign.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ResignList;
