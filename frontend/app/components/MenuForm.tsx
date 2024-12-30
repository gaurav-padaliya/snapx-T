import React from "react";

const MenuForm: React.FC = () => {
  return (
    <div className="bg-white p-4 shadow rounded-md">
      <h3 className="text-lg font-bold mb-4">Menu</h3>
      <form>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Menu ID</label>
          <input
            type="text"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            disabled
            value="56320ee9-6af6-11ed-a7ba-f220affe5e49"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Depth</label>
          <input
            type="number"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            disabled
            value="3"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Parent Data</label>
          <input
            type="text"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            disabled
            value="Systems"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            placeholder="System Code"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default MenuForm;
