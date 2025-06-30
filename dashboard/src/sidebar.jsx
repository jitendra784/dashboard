import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLock,
  faUserPlus,
  faUser,
  faTableColumns,
  faBars,
  faXmark,
  faInfo,
} from "@fortawesome/free-solid-svg-icons";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaRegFolder } from "react-icons/fa";

const Sidebar = () => {
  const [expanded, setExpanded] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openResignMenu, setOpenResignMenu] = useState(false);

  return (
    <>
      {/* Mobile toggle button */}
      <div onMouseEnter={() => setExpanded(true)}>
        <button
          className="fixed top-7  left-4 z-50 text-white  p-2 rounded lg:hidden"
          onClick={() => setMobileOpen(true)}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>

      {/* Sidebar background overlay when mobile menu is open */}
      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          className="fixed inset-0 bg-black opacity-50 z-40 lg:hidden"
        />
      )}

      {/* Sidebar */}
      <div
        onMouseEnter={() => setExpanded(true)}
        onMouseLeave={() => setExpanded(false)}
        className={`fixed top-0 left-0  bg-neutral-800 border border-r-2 rounded-md border-white text-white z-50 transform duration-300 ease-in-out min-h-screen 
          ${expanded ? "w-64" : "w-26"}
          ${mobileOpen ? "translate-x-0" : "-translate-x-full"} 
          lg:translate-x-0 lg:static `}
      >
        {/* Close button on mobile */}
        <div className="pt-4 pl-2 flex items-center justify-between sm:hidden">
          <div className="pl-6 pt-4  flex justify-between items-center gap-2">
            <img src="/logo1.png" className="w-8 pl-0 " alt="Logo" />
            {expanded && <span className="text-xl font-bold  pr-25">ITPL</span>}

            <button onClick={() => setMobileOpen(false)} className="text-white">
              <FontAwesomeIcon icon={faXmark} size="lg" />
            </button>
          </div>
        </div>

        {/* Logo + Text */}
        <div className="pl-6 pt-4 hidden lg:flex items-center gap-2">
          <img src="/logo1.png" className="w-8 pl-0" alt="Logo" />
          {expanded && <span className="text-xl font-bold">ITPL</span>}
        </div>

        {/* Navigation Links */}
        <div className="mt-4 flex  flex-col pl-6 px-2">
          <Link
            to="/dashboard"
            className="flex items-center gap-3 hover:border p-3 rounded-xl"
          >
            <FontAwesomeIcon icon={faTableColumns} />
            {expanded && <span>Dashboard</span>}
          </Link>
          <Link
            to="/profile"
            className="flex items-center gap-3 hover:border p-3 rounded-xl"
          >
            <FontAwesomeIcon icon={faUser} />
            {expanded && <span>Profile</span>}
          </Link>
          <Link
            to="/users"
            className="flex items-center gap-3 hover:border p-3 rounded-xl"
          >
            <FontAwesomeIcon icon={faUserPlus} />
            {expanded && <span>Add User</span>}
          </Link>
          <Link
            to="/dsr_list"
            className="flex items-center gap-3 hover:border p-3 rounded-xl"
          >
            <FaRegFolder size={19} />
            {expanded && <span>DSR List</span>}
          </Link>
          <Link
            to="/add_Dsr_Report"
            className="flex items-center gap-3 hover:border p-3 rounded-xl"
          >
            <FaRegFolder size={19} />
            {expanded && <span>Add DSR Report</span>}
          </Link>
          <Link
            to="/attendanceSheet"
            className="flex items-center gap-3 hover:border p-3 rounded-xl"
          >
            <FaRegFolder size={19} />
            {expanded && <span>Attendance Sheet</span>}
          </Link>
          <Link
            to="/daily_Attendance"
            className="flex items-center gap-3 hover:border p-3 rounded-xl"
          >
            <FaRegFolder size={19} />
            {expanded && <span>Daily Attendance Report</span>}
          </Link>
          <Link
            to="/holidayCalender"
            className="flex items-center gap-3 hover:border p-3 rounded-xl"
          >
            <FaRegFolder size={19} />
            {expanded && <span>Holiday Calendar</span>}
          </Link>
          
            <div
            className="relative"
            onMouseEnter={() => setOpenResignMenu(true)}
            onMouseLeave={() => setOpenResignMenu(false)}
          >
            <button className="flex items-center gap-3 hover:border p-3 rounded-md w-full">
              <FaRegFolder size={19} />
              {expanded && <span className="flex-1">Leave Apply</span>}
              {expanded &&
                (openResignMenu ? <FaChevronUp /> : <FaChevronDown />)}
            </button>

            {openResignMenu && (
              <div className="ml-8 mt-2 space-y-2 text-md">
                <Link
                  to="/leaveList"
                  className="block hover:text-cyan-500"
                >
                  Leave List
                </Link>
                
               
                <Link to="/addLeave" className="block hover:text-cyan-500">
                  Add Leave
                </Link>
              </div>
            )}
          </div>

          <div
            className="relative"
            onMouseEnter={() => setOpenResignMenu(true)}
            onMouseLeave={() => setOpenResignMenu(false)}
          >
            <button className="flex items-center gap-3 hover:border p-3 rounded-md w-full">
              <FaRegFolder size={19} />
              {expanded && <span className="flex-1">E-Resign/Ref</span>}
              {expanded &&
                (openResignMenu ? <FaChevronUp /> : <FaChevronDown />)}
            </button>

            {openResignMenu && (
              <div className="ml-8 mt-2 space-y-2 text-md">
                <Link
                  to="/addEmpReference"
                  className="block hover:text-cyan-500"
                >
                  Add Emp Reference
                </Link>
                <Link
                  to="/empReferenceListing"
                  className="block hover:text-cyan-500"
                >
                  Emp Reference Listing
                </Link>
                <Link to="/addResign" className="block hover:text-cyan-500">
                  Add Resign
                </Link>
                <Link to="/resignList" className="block hover:text-cyan-500">
                  Resign Listing
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
