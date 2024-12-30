import React from "react";

const MenuForm: React.FC<{ selectedNode: any }> = ({ selectedNode }) => {
  return (
    <div className="p-6 border rounded-md bg-gray-50">
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Menu ID
        </label>
        <input
          type="text"
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          value={selectedNode?.id || ""}
          disabled
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Depth</label>
        <input
          type="number"
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          value={selectedNode?.depth || ""}
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
          value={selectedNode?.parent || ""}
          disabled
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          value={selectedNode?.name || ""}
          disabled
        />
      </div>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
        Save
      </button>
    </div>
  );
};

export default MenuForm;
