"use client";

import React from "react";
import { FaFolder } from "react-icons/fa";
import { useTreeContext } from "../context/TreeContext";
import { BsGrid3X3GapFill } from "react-icons/bs";

const MenuHeader: React.FC = () => {
  const { dispatch } = useTreeContext();

  return (
    <div className="flex flex-col space-y-6 ml-6">
      {/* Breadcrumbs */}
      <div className="flex items-center space-x-2 text-gray-500 text-sm">
        <FaFolder className="text-lg text-gray-500" />
        <span>/ Menus</span>
      </div>

      {/* Title */}
      {/* i need icon  */}
      <div className="text-2xl font-bold flex flex-row items-center">
        <span className="flex items-center justify-center w-10 h-10 bg-blue-700 rounded-full text-white">
          <BsGrid3X3GapFill className="mr-3 text-lg m-auto" />
        </span>
        <span className="ml-4">Menus</span>
      </div>

      {/* Dropdown and Buttons */}
      <div className="flex flex-col">
        {/* Dropdown */}
        <div className="text-sm text-gray-500">Menu</div>
        <div className="relative w-48">
          <select className="border rounded-md pr-20 px-4 py-4 text-sm focus:outline-none bg-gray-50">
            <option value="system-management">system management</option>
            {/* <option value="menu-management">menu management</option> */}
          </select>
        </div>

        {/* Expand All and Collapse All Buttons */}
        <div className="flex space-x-4 mt-4 pt-4">
          <button
            className="bg-black text-white text-xs px-4 py-2 rounded-3xl hover:bg-gray-800"
            onClick={() => dispatch({ type: "TOGGLE_ALL", payload: true })}
          >
            Expand All
          </button>
          <button
            className="bg-white border border-gray-300 text-xs text-black px-4 py-2 rounded-3xl hover:bg-gray-200"
            onClick={() => dispatch({ type: "TOGGLE_NONE", payload: false })}
          >
            Collapse All
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuHeader;
