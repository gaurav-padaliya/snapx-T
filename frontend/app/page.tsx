"use client"; // Make this a Client Component
import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import MenuTree from "./components/MenuTree";
import { menuData } from "./static/menuData";
import MenuForm from "./components/MenuForm";

const Page: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<any>(null);
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* <div className="flex space-x-8 p-6"> */}
      {/* Left: Menu Tree */}
      <div className="w-2/3">
        <MenuTree data={menuData} onSelect={setSelectedNode} />
      </div>
      {/* </div> */}

      {/* Right: Form */}
      <div className="w-1/3">
        {selectedNode ? (
          <MenuForm selectedNode={selectedNode} />
        ) : (
          <div className="text-gray-500">Select a node to view details</div>
        )}
      </div>
    </div>
  );
};

export default Page;
