// pages/UserPage.jsx
import React from "react";
import UserTable from "./userTable";

const sampleUsers = [
  {
    name: "Cate Blanchett",
    email: "cate.blanchett@left4code.com",
    position: "Project Manager",
    department: "Project Management",
    profileCompletion: 7,
    status: "Active",
    joined: "June 12, 2017",
    avatar: "https://randomuser.me/api/portraits/women/33.jpg", 
  },
  {
    name: "Angelina Jolie",
    email: "angelina.jolie@left4code.com",
    position: "Account Executive",
    department: "Account Management",
    profileCompletion: 54,
    status: "Inactive",
    joined: "July 10, 2012",
    avatar: "https://randomuser.me/api/portraits/women/21.jpg",
  },
  {
    name: "Brad Pitt",
    email: "brad.pitt@left4code.com",
    position: "Data Analyst",
    department: "Data Analystics",
    profileCompletion: 74,
    status: "Active",
    joined: "September 15, 2012",
    avatar: "https://randomuser.me/api/portraits/men/21.jpg",
  },
  {
    name: "Jennifer Lawrence",
    email: "jennifer.lawrence@left4code.com",
    position: "CRM Administrator",
    department: "CRM Team",
    profileCompletion: 74,
    status: "Inactive",
    joined: "November 11, 2018",
    avatar: "https://randomuser.me/api/portraits/women/15.jpg",
  },
   {
    name: "Meryl Streep",
    email: "meryl.streep@left4code.com",
    position: "Marketing Coordinator",
    department: "Marketing Department",
    profileCompletion: 74,
    status: "Active",
    joined: "December 18, 2012",
    avatar: "https://randomuser.me/api/portraits/women/21.jpg",
  },
  // ...add rest
];

const UserPage = () => {
  return (
    <div className="container mx-auto">
    <div className="min-h-screen bg-neutral-950 text-white p-10">
      <div className="flex flex-row justify-between"><h1 className="text-2xl font-semibold mb-6">Users</h1>
      <div ><button className="bg-blue-500 px-4 py-2 duration-700  rounded-md hover:rounded-4xl"> Add Users +</button></div>
      </div>
      <UserTable users={sampleUsers} />
    </div>
    </div>
  );
};

export default UserPage;
