import React, { useState } from "react";

const MenuForm: React.FC<{ activeNode: any }> = ({ activeNode }) => {
  const [name, setName] = useState("");

  return (
    <div className="p-6 border rounded-md bg-gray-50">
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Menu ID
        </label>
        <input
          type="text"
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          value={activeNode?.id || ""}
          disabled
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Parent Data
        </label>
        <input
          type="text"
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          value={activeNode?.name || ""}
          disabled
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          placeholder="Enter child name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        onClick={() => console.log(`Add child ${name} to ${activeNode?.name}`)}
      >
        Save
      </button>
    </div>
  );
};

export default MenuForm;
