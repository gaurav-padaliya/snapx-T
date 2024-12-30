"use client";

import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";

const TreeNode: React.FC<{
  node: any;
  onSelect: (node: any) => void;
  depth: number;
}> = ({ node, onSelect, depth }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <li
      className="relative ml-6"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Connector Lines */}
      {/* <div className="absolute -left-6 top-3 h-full border-l border-gray-300"></div> */}
      <div className="absolute -left-6 top-3 w-6 border-b border-gray-300"></div>

      {/* Node Header */}
      <div className="flex items-center space-x-2">
        {node.children ? (
          isExpanded ? (
            <IoIosArrowDown
              className="text-gray-500 cursor-pointer"
              onClick={() => setIsExpanded(!isExpanded)}
            />
          ) : (
            <IoIosArrowForward
              className="text-gray-500 cursor-pointer"
              onClick={() => setIsExpanded(!isExpanded)}
            />
          )
        ) : (
          <span className="w-4"></span>
        )}

        <span className="text-sm cursor-pointer" onClick={() => onSelect(node)}>
          {node.name}
        </span>

        {/* Plus Icon */}
        {isHovered && (
          <button
            className="text-blue-500 hover:text-blue-600"
            onClick={(e) => {
              e.stopPropagation(); // Prevent arrow click
              console.log(`Add child to ${node.name}`);
            }}
          >
            <FaPlus />
          </button>
        )}
      </div>

      {/* Children */}
      {isExpanded && node.children && (
        <ul className="ml-6 border-l border-gray-300">
          {node.children.map((child: any) => (
            <TreeNode
              key={child.id}
              node={child}
              onSelect={onSelect}
              depth={depth + 1}
            />
          ))}
        </ul>
      )}
    </li>
  );
};

export default TreeNode;
