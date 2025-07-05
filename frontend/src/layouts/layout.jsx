// components/Layout.jsx
import React from "react";
import Sidebar from "./sidebar";
import Search from "../components/search";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="w-full p-4">
        <Search />
        <Outlet /> {/* This is where nested route content renders */}
      </main>
    </div>
  );
};

export default Layout;
