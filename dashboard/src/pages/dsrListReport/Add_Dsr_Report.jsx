import { useState } from "react";
import axios from "axios";

export default function AddDSRForm() {
  const [form, setForm] = useState({
    email: "",
    date: "",
    attachment: "",
    projectName: "",
    projectDescription: "",
    todoTask: "",
  });

  const [todoTasks, setTodoTasks] = useState([]);

  const handleAddTodo = () => {
    if (form.todoTask.trim() !== "") {
      setTodoTasks([...todoTasks, form.todoTask]);
      setForm({ ...form, todoTask: "" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      ...form,
      todoTasks,
    };
    await axios.post("http://localhost:8001/api/dsr", payload);
    alert("DSR Submitted");
    setForm({
      email: "",
      date: "",
      attachment: "",
      projectName: "",
      projectDescription: "",
      todoTask: "",
    });
    setTodoTasks([]);
  };

  return (
    <div className="min-h-screen text-white rounded-md  p-4  bg-black">
      <h1 className="text-xl mb-4">
        Employee Dsr Section / <span className="text-gray-200">Overview</span>
      </h1>
      <form onSubmit={handleSubmit} className="bg-neutral-800 rounded-md p-8 ">
        <div className="mb-6  items-center ">
          <div className="grid grid-cols-2 mb-5">
            <div>
              <label className="text-xl mr-3">Select Email</label>
              <input
                type="email"
                placeholder="Select Email"
                className="border w-90 h-12 rounded-md bg-neutral-800 text-white px-4 py-2"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />
            </div>
            <div>
              <label className="text-xl  mr-3 ">Date</label>
              <input
                type="date"
                className="border w-90 h-12 mb-7 rounded-md bg-neutral-800 text-white px-4 py-2"
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
                required
              />
            </div>
          </div>
          <div>
            <label className="text-xl  mr-3 ">Attachment</label>
            <input
              type="text"
              placeholder="(optional)"
              className="border w-7/12 h-12 mb-7 rounded-md bg-neutral-800 text-white px-4 py-2"
              value={form.attachment}
              onChange={(e) => setForm({ ...form, attachment: e.target.value })}
            />
          </div>
         <div className="grid grid-cols-3">
           <div>
            <label className="text-xl  mr-3">Project Name</label>
            <input
              type="text"
              placeholder="Project Name"
              className="border w-90 h-12 mb-5  rounded-md bg-neutral-800 text-white px-4 py-2"
              value={form.projectName}
              onChange={(e) =>
                setForm({ ...form, projectName: e.target.value })
              }
              required
            />
          </div>
          <div>
            <label className="text-xl  mr-3 ">Project Description</label>

            <input
              placeholder="Project Description"
              className="border mb-5 w-90 h-12 rounded-md bg-neutral-800  text-white px-4 py-2"
              value={form.projectDescription}
              onChange={(e) =>
                setForm({ ...form, projectDescription: e.target.value })
              }
              required
            />
          </div>
          <div >
            <label className="text-xl  mr-3 ">Project Todo</label>
            
            <input
              type="text"
              placeholder="To Do Task"
              className="border w-90 mb-5 h-12  rounded-md bg-neutral-800 text-white px-4 py-2"
              value={form.todoTask}
              onChange={(e) => setForm({ ...form, todoTask: e.target.value })}
            />
          </div>
         </div>
            {/* <button
              type="button"
              onClick={handleAddTodo}
              className=" text-center bg-blue-700 text-white  px-2 py-1 rounded-md "
            >
              Add More
            </button> */}
        </div>

        <ul className="list-disc ml-6">
          {todoTasks.map((task, idx) => (
            <li key={idx}>{task}</li>
          ))}
        </ul>
        <button
          type="submit"
          className=" text-center bg-blue-700 ml-4 text-white h-20 px-6 py-2 text-xl rounded-md "
        >
          Submit
        </button>
      </form>
    </div>
  );
}
