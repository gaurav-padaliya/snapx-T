"use client"; // Make this a Client Component

import React from "react";

const MenuAddButton: React.FC = () => {
  const addFolder = () => {
    console.log("Add Folder");
    // Logic to add a new folder (placeholder for now)
  };

  return (
    <button
      onClick={addFolder}
      className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
    >
      Add Folder
    </button>
  );
};

export default MenuAddButton;
