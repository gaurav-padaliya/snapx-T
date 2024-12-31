import React, { useState } from "react";
import { addMenuItem } from "../api/menu"; // Import the addMenuItem API

const MenuForm: React.FC<{
  activeNode: any;
  onChildAdded: (newChild: any) => void;
}> = ({ activeNode, onChildAdded }) => {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSave = async () => {
    if (!name.trim()) {
      setError("Name is required");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const newChild = await addMenuItem({
        name,
        depth: activeNode?.depth + 1 || 1,
        parentId: activeNode?.id || null,
      });

      onChildAdded(newChild); // Notify parent component of the new child
      setName(""); // Clear the input field
    } catch (err: any) {
      setError(err.message || "Failed to add child");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 rounded-xl bg-white">
      {error && <div className="text-red-500 mb-4">{error}</div>}
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
        onClick={handleSave}
        disabled={loading}
      >
        {loading ? "Saving..." : "Save"}
      </button>
    </div>
  );
};

export default MenuForm;
