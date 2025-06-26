import { react, useState } from "react";
import axios from "axios";

function Add_Dsr_Report() {
  const [email, setEmail] = useState({
    email: "",
    attachment: "",
    project: [
      {
        projectname: "",
        projectdetails: "",
        todo: "",
      },
    ],
  });
  // const handleInput = (e) => {
  //   // console.log(e);
  //   let {name,value} = e.target;
   
  //   setEmail({
  //     ...email,
  //     [name]: value,
  //   });
  // };
  const handleInput = (e) => {
  const { name, value } = e.target;

  // If the field is inside project[0]
  if (["projectname", "projectdetails", "todo"].includes(name)) {
    setEmail((prev) => ({
      ...prev,
      project: [
        {
          ...prev.project[0],
          [name]: value,
        },
      ],
    }));
  } else {
    // Top-level fields like email, attachment
    setEmail((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
};
  // handling the form submittion
  const handleSubmit = async (e) => {
    e.preventDefault();
    alert(email);
    console.log(email);
    try {
      
    
    const response = await fetch(`http://localhost:8001/api/dsr`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(email),
    });
    console.log(response);
    } catch (error) {
      console.log("dsr",error)
    }
  };
  return (
    <div className="min-h-screen text-white rounded-md  p-4  bg-black">
      <h1 className="text-xl mb-4">
        Employee Dsr Section / <span className="text-gray-200">Overview</span>
      </h1>
      {/* add form  */}
      <form onSubmit={handleSubmit} className="bg-neutral-800 rounded-md p-8 ">
        <div className="mb-6  ">
          <label className="text-xl ">Select Email</label>
          <br />
          <input
            type="text"
            value={email.email}
            name="email"
            onChange={handleInput}
            autoComplete="off"
            className="border w-7/12 rounded-md h-10 bg-neutral-800"
          />
          {/* <select className="rounded-md border bg-neutral-800 text-white w-7/12 h-10">
            <option
            
              value={email.email}
              name="email"
              onChange={handleInput}
            >
              Select Email
            </option>
            <option value="demo.demo7887@gamil.com">
              demo.demo7887@gamil.com
            </option>
            <option value="demo.demo7887@gamil.com">
              demo.demo7887@gamil.com
            </option>
          </select> */}
        </div>
        <div className="mb-6">
          <label className="text-xl">
            Attachment *<span className="text-lg font-bold">It's optional</span>
          </label>
          <br />
          <input
            type="text"
            value={email.attachment}
            name="attachment"
            onChange={handleInput}
            placeholder="url"
            autoComplete="off"
            className="border w-7/12 rounded-md h-10 bg-neutral-800"
          />
        </div>
        <div className="flex gap-8 text-xl mb-6">
          <div>
            <label>Project Name</label>
            <div>
              <input
                type="text"
                value={email.projectname}
                name="projectname"
                onChange={handleInput}
                autoComplete="off"
                className="border w-90 h-12 rounded-md bg-neutral-800 text-white px-4 py-2"
                placeholder="Project Name"
              />
            </div>
          </div>
          <div>
            <label>Details of Project</label>
            <div>
              <textarea
                value={email.projectdetails}
                name="projectdetails"
                onChange={handleInput}
                autoComplete="off"
                placeholder="Project Details"
                className="border resize-y-10 w-90 rounded-md h-12 bg-neutral-800 text-white px-4 py-2"
              ></textarea>
            </div>
          </div>
          <div>
            <label>To Do</label>
            <div>
              <textarea
                value={email.todo}
                name="todo"
                onChange={handleInput}
                autoComplete="off"
                placeholder="To Do Task "
                className="border resize-y-10 w-80 h-12 rounded-md bg-neutral-800 text-white px-4 py-2"
              ></textarea>
            </div>
          </div>
          <button className=" text-center bg-blue-700 text-white  px-2 py-1 rounded-md ">
            Add More
          </button>
        </div>

        <button
          type="submit "
          className=" text-center bg-blue-700 ml-4 text-white h-20 px-6 py-2 text-xl rounded-md "
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Add_Dsr_Report;
