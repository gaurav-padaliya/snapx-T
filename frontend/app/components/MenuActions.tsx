"use client"; // Make this a Client Component

import React from "react";

const MenuActions: React.FC = () => {
  const expandAll = () => {
    console.log("Expand All");
    // Logic to expand all nodes (placeholder for now)
  };

  const collapseAll = () => {
    console.log("Collapse All");
    // Logic to collapse all nodes (placeholder for now)
  };

  return (
    <div className="flex space-x-4 p-4">
      <button
        onClick={expandAll}
        className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800"
      >
        Expand All
      </button>
      <button
        onClick={collapseAll}
        className="bg-white border px-4 py-2 rounded-md hover:bg-gray-200"
      >
        Collapse All
      </button>
    </div>
  );
};

export default MenuActions;
