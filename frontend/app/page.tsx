"use client";

import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import MenuTree from "./components/MenuTree";
import MenuForm from "./components/MenuForm";
import MenuHeader from "./components/MenuHeader";
import { fetchMenus } from "./api/menu";
import { TreeProvider } from "./context/TreeContext";
import { FiMenu } from "react-icons/fi";

const Page: React.FC = () => {
  const [activeNode, setActiveNode] = useState<any>(null);

  const [isMobileOpen, setIsMobileOpen] = useState<boolean>(false);
  const [menuData, setMenuData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

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

  const handleChildAdded = (newChild: any) => {
    const addChildToTree = (nodes: any[]): any[] =>
      nodes.map((node: any) =>
        node.id === newChild.parentId
          ? { ...node, children: [...(node.children || []), newChild] }
          : { ...node, children: addChildToTree(node.children || []) }
      );

    setMenuData((prevData) => addChildToTree(prevData));
  };

  useEffect(() => {
    loadMenus();
  }, []);

  return (
    <TreeProvider>
      <div className="flex h-screen">
        {/* Sidebar */}
        <Sidebar
          isMobileOpen={isMobileOpen}
          setIsMobileOpen={setIsMobileOpen}
        />

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-y-auto">
          <div className="m-8">
            {/* Hamburger Icon */}
            {!isMobileOpen && (
              <div className="z-50 flex h-12 pl-6 ">
                <button
                  onClick={() => setIsMobileOpen(true)}
                  className="top-0 left-4 text-xl text-gray z-50 lg:hidden"
                >
                  {<FiMenu />}
                </button>
              </div>
            )}
            <MenuHeader />
            <div className="flex flex-col md:flex-row md:space-x-8 mt-8">
              {/* Left: MenuTree */}
              <div className="w-full md:w-1/2">
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
              <div className="w-full md:w-1/2 mt-8 md:mt-0">
                {activeNode ? (
                  <MenuForm
                    activeNode={activeNode}
                    onChildAdded={handleChildAdded}
                  />
                ) : (
                  <div className="text-gray-500 text-center"></div>
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
