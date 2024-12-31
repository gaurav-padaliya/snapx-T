"use client";

import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import MenuTree from "./components/MenuTree";
import MenuForm from "./components/MenuForm";
import { menuData } from "./components/menuData";
import MenuHeader from "./components/MenuHeader";
import { TreeProvider } from "./context/TreeContext";

const Page: React.FC = () => {
  const [activeNode, setActiveNode] = useState<any>(null);

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
                <MenuTree
                  data={menuData}
                  onSelect={setActiveNode}
                  activeNode={activeNode}
                  setActiveNode={setActiveNode}
                />
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
