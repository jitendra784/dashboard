import React, { useState } from "react";
import { X } from "lucide-react";
import axios from "axios";
import { toast } from "react-toastify";

function AddHolidays({ onClose, fetchData }) {
  const [formData, setFormData] = useState({
    srno: "",
    name: "",
    date: "",
    weekday: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8001/api/holidays", formData);
      setFormData({ srno: "", name: "", date: "", weekday: "" });
       toast.success("Holiday added successfully!");
      onClose();       // close popup
      fetchData();     // refresh list
    } catch (err) {
      console.error("Error adding holiday:", err);
       toast.error("Failed to add holiday."); // ❌ Toast on error
    }
  };

  return (
    <div className="fixed inset-0 bg-opacity-30 backdrop-blur-sm flex items-center justify-center">
      <div className="flex mt-10 flex-col gap-5 text-white">
        <button onClick={onClose} className="place-self-end">
          <X size={30} />
        </button>
        <div className="bg-orange-900 rounded-xl border px-20 py-10 flex flex-col mx-4 gap-5 items-center">
          <h1 className="text-3xl mb-10 font-bold">ADD Holidays</h1>
          <form className="text-center" onSubmit={handleSubmit}>
            <div>
              <label>SrNo:</label>
              <input
                type="text"
                className="border border-gray-700 bg-neutral-800 px-3 py-1 ml-2 mt-3 text-white rounded-lg"
                name="srno"
                onChange={handleChange}
                value={formData.srno}
                required
              />
            </div>
            <div>
              <label>Holiday Name:</label>
              <input
                type="text"
                className="border border-gray-700 bg-neutral-800 px-3 py-1 ml-2 mt-3 text-white rounded-lg"
                name="name"
                onChange={handleChange}
                value={formData.name}
                required
              />
            </div>
            <div>
              <label>Date:</label>
              <input
                type="date"
                name="date"
                onChange={handleChange}
                value={formData.date}
                required
                className="border border-gray-700 px-3 bg-neutral-800 py-1 ml-2 text-white rounded-lg mt-3"
              />
            </div>
            <div>
              <label>Weekday:</label>
              <input
                type="text"
                className="border border-gray-700 px-3 py-1 ml-2 bg-neutral-800 text-white rounded-lg mt-3"
                name="weekday"
                onChange={handleChange}
                value={formData.weekday}
                required
              />
            </div>
            <button
              type="submit"
              className="border rounded-md px-4 py-2 mt-8 bg-neutral-800"
            >
              Click To Add
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddHolidays;
