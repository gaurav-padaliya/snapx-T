import React from "react";
import Sidebar from "./components/Sidebar";
import MenuTree from "./components/MenuTree";
import MenuForm from "./components/MenuForm";

const Page: React.FC = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-4">
        <div className="flex space-x-4">
          {/* Menu Tree */}
          <div className="w-2/3">
            <MenuTree />
          </div>

          {/* Menu Form */}
          <div className="w-1/3">
            <MenuForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
