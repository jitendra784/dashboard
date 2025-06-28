// components/Layout.jsx
import React from "react";
import Sidebar from "./sidebar";
import Search from "./search";

const Layout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="w-full p-4">
        <Search />       {/* Breadcrumb bar */}
        {children}       {/* Current route content */}
      </main>
    </div>
  );
};

export default Layout;
