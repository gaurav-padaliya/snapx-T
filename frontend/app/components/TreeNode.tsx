"use client";

import React, { useState, useEffect } from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { FaPlus } from "react-icons/fa";
import { useTreeContext } from "../context/TreeContext";

const TreeNode: React.FC<{
  node: any;
  depth: number;
  onSelect: (node: any) => void;
  activeNode: any;
  setActiveNode: (node: any) => void;
}> = ({ node, depth, onSelect, activeNode, setActiveNode }) => {
  const { state } = useTreeContext();
  const [isExpanded, setIsExpanded] = useState(false);

  // Listen to global expand/collapse state
  useEffect(() => {
    setIsExpanded(state.isExpanded);
  }, [state.isExpanded]);

  return (
    <li className="relative ml-6">
      {/* Vertical and Horizontal Lines */}
      {depth !== 1 && (
        <div
          className={`absolute -left-6 top-3 w-6 border-b border-gray-300`}
          style={{ height: depth === 1 ? "50%" : "" }}
        ></div>
      )}
      {/* Node Header */}
      <div
        className={`flex items-center space-x-2 ${
          activeNode?.id === node.id ? "rounded-md pb-4" : "pb-4"
        }`}
        onClick={() => {
          onSelect(node);
          setActiveNode(node);
        }}
      >
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
        <span className="text-sm">{node.name}</span>

        {/* Plus Icon for Active Node */}
        {activeNode?.id === node.id && (
          <button
            className="text-blue-500 hover:text-blue-600"
            onClick={(e) => {
              e.stopPropagation(); // Prevent arrow toggle
              console.log(`Adding child to: ${node.name}`);
            }}
          >
            <FaPlus />
          </button>
        )}
      </div>
      {/* Child Nodes */}
      {isExpanded && node.children && (
        <ul className="ml-2 border-l border-gray-300">
          {node.children.map((child: any) => (
            <TreeNode
              key={child.id}
              node={child}
              onSelect={onSelect}
              depth={depth + 1}
              activeNode={activeNode}
              setActiveNode={setActiveNode}
            />
          ))}
        </ul>
      )}
    </li>
  );
};

export default TreeNode;
