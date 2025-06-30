import { useEffect, useState } from "react"; //
import { FaInbox, FaPen, FaEdit } from "react-icons/fa";
import { LuSend } from "react-icons/lu";
import { toast } from "react-toastify";
import { MdDelete } from "react-icons/md";
import axios from "axios";
import EditForm from "./EditForm";
function LeaveList() {
  const [leave, setLeave] = useState([]);
  const [editId, setEditId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [formData, setFormData] = useState({
    from: "",
    subject: "",
    date: "",
    message: "",
  });
  const fetchLeave = async () => {
    try {
      const res = await fetch("http://localhost:8001/api/leave");
      const data = await res.json();
      setLeave(data);
    } catch (error) {
      console.error("failed to fetch holidays", error);
    }
  };
  // useeffect only call it on mount
  useEffect(() => {
    fetchLeave();
  }, []);

  // delete the user on click delete button
  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:8001/api/leave/${id}`);
      setLeave(leave.filter((item) => item._id !== id));
      toast.success("Leave deleted successfully");
    } catch (error) {
      console.error("Delete failed:", error);
      toast.error("Failed to delete leave");
    }
  };

  const editUser = (item) => {
    setEditId(item._id);
    setFormData({
      from: item.from,
      subject: item.subject,
      date: item.date,
    });
  };

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
          <FaPen />
          Compose
        </button>
      </div>
      <div className="flex justify-end mt-5">
        <label className="font-bold text-xl mr-3 ">Search </label>
        <input
          type="text"
          placeholder="Search by subject or from..."
          className="border h-10 rounded-md w-60 text-white px-2"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div>
        <table className="table-auto mt-10 w-full border-collapse border border-gray-300">
          <thead>
            <tr className="text-center border border-gray-700 ">
              <th className="border border-gray-700 text-lg px-4 py-2">No.</th>
              <th className="border border-gray-700 text-lg px-4 py-2">
                Subject
              </th>
              <th className="border border-gray-700 text-lg px-4 py-2">From</th>
              <th className="border border-gray-700 text-lg px-4 py-2">Date</th>
              <th className="border border-gray-700 text-lg px-4 py-2">
                update/ <br />
                delete
              </th>
            </tr>
          </thead>
          <tbody>
            {leave
              .filter(
                (leaves) =>
                  leaves.subject
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase()) ||
                  leaves.from.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map((leaves, index) => (
                <tr className="text-center border" key={index}>
                  <td className="border border-gray-700 px-4 py-2">
                    {index + 1}
                  </td>
                  <td className="border border-gray-700 px-4 py-2">
                    {leaves.subject}
                  </td>
                  <td className="border border-gray-700 px-4 py-2">
                    {leaves.from}
                  </td>
                  <td className="border border-gray-700 px-4 py-2">
                    {leaves.date}
                  </td>
                  <td className="border space-x-5 border-gray-700 px-2 py-2">
                    <button onClick={() => editUser(leaves)}>
                      <FaEdit size={18} />
                    </button>
                    <button onClick={() => deleteUser(leaves._id)}>
                      <MdDelete size={18} />
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>

        {/* ✅ Part 2: Edit Form will go here */}
        {editId && (
          <EditForm
            formData={formData}
            setFormData={setFormData}
            setEditId={setEditId}
            editId={editId}
            setLeave={setLeave}
          />
        )}
      </div>
    </div>
  );
}

export default LeaveList;
