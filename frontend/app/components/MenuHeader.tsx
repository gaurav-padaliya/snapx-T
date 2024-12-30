"use client";

import React from "react";
import { FaFolder } from "react-icons/fa";

const MenuHeader: React.FC = () => {
  return (
    <div className="flex flex-col space-y-6 border-b border-gray-200 pb-6">
      {/* Breadcrumbs */}
      <div className="flex items-center space-x-2 text-gray-500 text-sm">
        <FaFolder className="text-lg text-gray-500" />
        <span>/ Menus</span>
      </div>

      {/* Title */}
      <h1 className="text-2xl font-bold">Menus</h1>

      {/* Dropdown and Buttons */}
      <div className="flex items-center space-x-4">
        {/* Dropdown */}
        <select className="border rounded-md px-4 py-2 text-sm focus:outline-none bg-gray-50">
          <option value="system-management">system management</option>
          <option value="menu-management">menu management</option>
        </select>

        {/* Expand All and Collapse All Buttons */}
        <div className="flex space-x-4">
          <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800">
            Expand All
          </button>
          <button className="bg-white border border-gray-300 text-black px-4 py-2 rounded-md hover:bg-gray-200">
            Collapse All
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuHeader;
