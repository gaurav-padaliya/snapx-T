import React from "react";
import { FaFolder } from "react-icons/fa";

const MenuHeader: React.FC = () => {
  return (
    <div className="flex items-center justify-between p-4 border-b">
      <div className="flex items-center space-x-2">
        <FaFolder className="text-lg text-gray-500" />
        <span className="text-gray-500">/ Menus</span>
      </div>
      <h1 className="text-2xl font-bold">Menus</h1>
      <select className="border rounded-md px-3 py-1 text-sm focus:outline-none">
        <option value="system-management">System Management</option>
      </select>
    </div>
  );
};

export default MenuHeader;
