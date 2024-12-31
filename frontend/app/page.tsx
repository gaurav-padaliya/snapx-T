"use client";

import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import MenuTree from "./components/MenuTree";
import MenuForm from "./components/MenuForm";
import MenuHeader from "./components/MenuHeader";
import { fetchMenus } from "./api/menu";
import { TreeProvider } from "./context/TreeContext";

const Page: React.FC = () => {
  const [activeNode, setActiveNode] = useState<any>(null);
  const [menuData, setMenuData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadMenus = async () => {
      try {
        const data = await fetchMenus();
        setMenuData(data);
      } catch (err: any) {
        setError(err.message || "Failed to fetch menus");
      } finally {
        setLoading(false);
      }
    };
    loadMenus();
  }, []);

  return (
    <TreeProvider>
      <div className="flex h-screen">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-y-auto">
          <div className="m-8">
            <MenuHeader />
            <div className="flex space-x-8 mt-8">
              <div className="w-1/2">
                {loading ? (
                  <div>Loading menus...</div>
                ) : error ? (
                  <div className="text-red-500">Error: {error}</div>
                ) : (
                  <MenuTree
                    data={menuData}
                    onSelect={setActiveNode}
                    activeNode={activeNode}
                    setActiveNode={setActiveNode}
                  />
                )}
              </div>
              {/* Right: Form */}
              <div className="w-1/2">
                {activeNode ? (
                  <MenuForm activeNode={activeNode} />
                ) : (
                  <div className="text-gray-500">
                    Select a node to view details
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </TreeProvider>
  );
};

export default Page;
