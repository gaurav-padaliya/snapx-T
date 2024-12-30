"use client"; // Make this a Client Component
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
      <div className="flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}

        <div className="w-2/3 m-8">
          <MenuHeader />
          <MenuTree
            data={menuData}
            onSelect={setActiveNode}
            activeNode={activeNode}
            setActiveNode={setActiveNode}
          />
        </div>

        {/* Right: Form */}
        <div className="w-1/3">
          {activeNode ? (
            <MenuForm activeNode={activeNode} />
          ) : (
            <div className="text-gray-500">Select a node to view details</div>
          )}
        </div>
      </div>
    </TreeProvider>
  );
};

export default Page;
