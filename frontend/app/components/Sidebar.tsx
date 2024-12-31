"use client";

import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { FaFolder } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

interface SidebarProps {
  isMobileOpen: boolean;
  setIsMobileOpen: (isOpen: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isMobileOpen, setIsMobileOpen }) => {
  const [activeSection, setActiveSection] = useState<string | null>(null); // Tracks expanded sections

  const toggleSection = (section: string) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <>
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 bg-[#0B1220] text-white h-full transition-transform duration-300 z-40 ${
          isMobileOpen ? "translate-x-0" : "-translate-x-full"
        } lg:relative lg:translate-x-0 lg:w-72`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between px-6 pl-8 py-6 border-b border-gray-700">
          <h1 className="text-2xl font-extrabold tracking-wide">CLOIT</h1>
          <button
            onClick={() => setIsMobileOpen(false)}
            className="text-white text-2xl focus:outline-none lg:hidden"
          >
            <IoMdClose />
          </button>
          {/* Laptop Menu Icon */}
          <button
            // onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="text-white text-2xl focus:outline-none hidden lg:block"
          >
            <FiMenu />
          </button>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 px-4 pt-6">
          <ul className="space-y-4">
            {/* Systems Section */}
            <li className="relative group">
              <div
                className="flex items-center justify-between cursor-pointer px-6 py-3 hover:bg-gray-800 rounded-md"
                onClick={() => toggleSection("systems")}
              >
                <div className="flex items-center space-x-4">
                  <FaFolder className="text-xl" />
                  <span className="text-base font-semibold">Systems</span>
                </div>
                <span>
                  {activeSection === "systems" ? (
                    <IoIosArrowDown />
                  ) : (
                    <IoIosArrowForward />
                  )}
                </span>
              </div>
              {/* Submenu */}
              {activeSection === "systems" && (
                <ul className="pl-2 mt-2 space-y-3">
                  <li className="flex items-center px-4 py-2 text-sm hover:bg-gray-800 rounded-md">
                    <BsGrid3X3GapFill className="mr-3 text-gray-400 text-lg" />
                    <span className="text-base">System Code</span>
                  </li>
                  <li className="flex items-center px-4 py-2 text-sm hover:bg-gray-800 rounded-md">
                    <BsGrid3X3GapFill className="mr-3 text-gray-400 text-lg" />
                    <span className="text-base">Properties</span>
                  </li>
                  <li className="flex items-center px-4 py-2 text-sm hover:bg-gray-800 rounded-md bg-[#9ff443] text-gray-900 font-bold">
                    <BsGrid3X3GapFill className="mr-3 text-lg" />
                    <span className="text-base">Menus</span>
                  </li>
                  <li className="flex items-center px-4 py-2 text-sm hover:bg-gray-800 rounded-md">
                    <BsGrid3X3GapFill className="mr-3 text-gray-400 text-lg" />
                    <span className="text-base">API List</span>
                  </li>
                </ul>
              )}
            </li>

            {/* Users & Groups Section */}
            <li className="relative group">
              <div
                className="flex items-center justify-between cursor-pointer px-6 py-3 hover:bg-gray-800 rounded-md"
                onClick={() => toggleSection("usersGroups")}
              >
                <div className="flex items-center space-x-4">
                  <FaFolder className="text-xl" />
                  <span className="text-base font-semibold">
                    Users & Groups
                  </span>
                </div>
                <span>
                  {activeSection === "usersGroups" ? (
                    <IoIosArrowDown />
                  ) : (
                    <IoIosArrowForward />
                  )}
                </span>
              </div>
              {/* Submenu */}
              {activeSection === "usersGroups" && (
                <ul className="pl-2 mt-2 space-y-3">
                  <li className="flex items-center px-4 py-2 text-sm hover:bg-gray-800 rounded-md">
                    <BsGrid3X3GapFill className="mr-3 text-gray-400 text-lg" />
                    <span className="text-base">Users</span>
                  </li>
                  <li className="flex items-center px-4 py-2 text-sm hover:bg-gray-800 rounded-md">
                    <BsGrid3X3GapFill className="mr-3 text-gray-400 text-lg" />
                    <span className="text-base">Groups</span>
                  </li>
                </ul>
              )}
            </li>

            {/* Competition Section */}
            <li>
              <div
                className="flex items-center cursor-pointer px-6 py-3 hover:bg-gray-800 rounded-md"
                onClick={() => toggleSection("competition")}
              >
                <div className="flex items-center space-x-4">
                  <FaFolder className="text-xl" />
                  <span className="text-base font-semibold">Competition</span>
                </div>
              </div>
            </li>
          </ul>
        </nav>
      </div>

      {/* Overlay */}
      {isMobileOpen && (
        <div
          onClick={() => setIsMobileOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
        ></div>
      )}
    </>
  );
};

export default Sidebar;
