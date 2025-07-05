import React, { useState, useRef, useEffect } from "react";
import { CheckCircleIcon, XCircleIcon } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";

const UserRow = ({ user }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Close menu when clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <tr className="border-b border-dashed neutral-700 hover:bg-neutral-800 transition relative">
      <td className="p-3 flex items-center gap-3">
        <input type="checkbox" />
        <img src={user.avatar} alt="avatar" className="w-8 h-8 rounded-full" />
        <div>
          <div className="font-semibold text-white">{user.name}</div>
          <div className="text-sm text-neutral-400 pr-5">{user.email}</div>
        </div>
      </td>
      <td className="p-3 text-white">
        <div>{user.position}</div>
        <div className="text-sm text-neutral-400">{user.department}</div>
      </td>
      <td className="p-3 text-white">
        <div className="w-24 h-1 bg-neutral-700 rounded">
          <div
            className="h-1 bg-blue-500 rounded"
            style={{ width: `${user.profileCompletion}%` }}
          />
        </div>
        <div className="text-sm text-neutral-400">{user.profileCompletion}%</div>
      </td>
      <td className="p-3">
        <span
          className={`text-sm font-medium ${
            user.status === "Active" ? "text-green-400" : "text-red-400"
          }`}
        >
          {user.status === "Active" ? (
            <CheckCircleIcon className="inline w-4 h-4 mr-1" />
          ) : (
            <XCircleIcon className="inline w-4 h-4 mr-1" />
          )}
          {user.status}
        </span>
      </td>
      <td className="p-3 text-white">{user.joined}</td>
      <td className="p-3 text-right relative" ref={menuRef}>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-neutral-400 hover:text-white"
        >
          <FontAwesomeIcon icon={faEllipsisV} className="text-base" />
        </button>

        {/* Dropdown menu */}
        {isMenuOpen && (
          <div className="absolute right-0 mt-2 w-28 bg-neutral-800 border border-neutral-600 rounded shadow-md z-50">
            <button
              onClick={() => alert(`Edit ${user.name}`)}
              className="block w-full text-left px-4 py-2 hover:bg-neutral-700 text-white"
            >
              Edit
            </button>
            <button
              onClick={() => alert(`Delete ${user.name}`)}
              className="block w-full text-left px-4 py-2 hover:bg-red-600 text-white"
            >
              Delete
            </button>
          </div>
        )}
      </td>
    </tr>
  );
};

export default UserRow;
