import React, { useState } from "react";

const MenuForm: React.FC<{ activeNode: any }> = ({ activeNode }) => {
  const [name, setName] = useState("");

  return (
    <div className="p-6 rounded-xl bg-white">
      <div className="mb-6">
        <label className="block text-sm font-semibold text-gray-600 mb-2">
          Menu ID
        </label>
        <input
          type="text"
          className="w-full px-4 py-2 text-sm bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={activeNode?.id || ""}
          disabled
        />
      </div>
      <div className="mb-6">
        <label className="block text-sm font-semibold text-gray-600 mb-2">
          Depth
        </label>
        <input
          type="text"
          className="w-full px-4 py-2 text-sm bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={activeNode?.depth || ""}
          disabled
        />
      </div>
      <div className="mb-6">
        <label className="block text-sm font-semibold text-gray-600 mb-2">
          Parent Data
        </label>
        <input
          type="text"
          className="w-full px-4 py-2 text-sm bg-gray-100 rounded-lg  focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={activeNode?.name || ""}
          disabled
        />
      </div>
      <div className="mb-6">
        <label className="block text-sm font-semibold text-gray-600 mb-2">
          Name
        </label>
        <input
          type="text"
          className="w-full px-4 py-2 text-sm bg-white rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter child name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <button
        className="w-full py-3 bg-blue-600 text-white text-sm font-semibold rounded-3xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        onClick={() => console.log(`Add child ${name} to ${activeNode?.name}`)}
      >
        Save
      </button>
    </div>
  );
};

export default MenuForm;
