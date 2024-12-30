"use client";

import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { FaFolder } from "react-icons/fa";

const Sidebar: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(true); // Sidebar expand/collapse
  const [activeSection, setActiveSection] = useState<string | null>(null); // Tracks expanded sections

  const toggleSection = (section: string) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <div
      className={`${
        isExpanded ? "w-72" : "w-20"
      } bg-[#0B1220] text-white h-screen flex flex-col transition-all duration-300`}
    >
      {/* Sidebar Header */}
      <div className="flex items-center justify-between px-6 py-6 border-b border-gray-700">
        <h1
          className={`text-2xl font-extrabold tracking-wide ${
            !isExpanded && "hidden"
          } transition-all duration-300`}
        >
          CLOIT
        </h1>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-white text-2xl focus:outline-none"
        >
          <FiMenu />
        </button>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 px-4 pt-6">
        <ul className="space-y-4">
          {/* Systems Section */}
          <li>
            <div
              className="flex items-center justify-between cursor-pointer px-6 py-3 hover:bg-gray-800 rounded-md"
              onClick={() => toggleSection("systems")}
            >
              <div className="flex items-center space-x-4">
                <FaFolder className="text-xl" />
                <span
                  className={`text-base font-semibold ${
                    !isExpanded && "hidden"
                  } transition-all duration-300`}
                >
                  Systems
                </span>
              </div>
              {isExpanded && (
                <span>
                  {activeSection === "systems" ? (
                    <IoIosArrowDown />
                  ) : (
                    <IoIosArrowForward />
                  )}
                </span>
              )}
            </div>
            {/* Submenu */}
            {activeSection === "systems" && (
              <ul
                className={`pl-2 mt-2 space-y-3 ${
                  !isExpanded && "hidden"
                } transition-all`}
              >
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
          <li>
            <div
              className="flex items-center justify-between cursor-pointer px-6 py-3 hover:bg-gray-800 rounded-md"
              onClick={() => toggleSection("usersGroups")}
            >
              <div className="flex items-center space-x-4">
                <FaFolder className="text-xl" />
                <span
                  className={`text-base font-semibold ${
                    !isExpanded && "hidden"
                  } transition-all duration-300`}
                >
                  Users & Groups
                </span>
              </div>
              {isExpanded && (
                <span>
                  {activeSection === "usersGroups" ? (
                    <IoIosArrowDown />
                  ) : (
                    <IoIosArrowForward />
                  )}
                </span>
              )}
            </div>
            {/* Submenu */}
            {activeSection === "usersGroups" && (
              <ul
                className={`pl-2 mt-2 space-y-3 ${
                  !isExpanded && "hidden"
                } transition-all`}
              >
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
                <span
                  className={`text-base font-semibold ${
                    !isExpanded && "hidden"
                  } transition-all duration-300`}
                >
                  Competition
                </span>
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
