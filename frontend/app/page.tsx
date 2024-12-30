"use client"; // Make this a Client Component
import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import MenuTree from "./components/MenuTree";
import MenuForm from "./components/MenuForm";
import { menuData } from "./components/menuData";

const Page: React.FC = () => {
  const [activeNode, setActiveNode] = useState<any>(null);
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* <div className="flex space-x-8 p-6"> */}
      <div className="w-2/3">
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
  );
};

export default Page;
