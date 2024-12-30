"use client";

import React from "react";
import TreeNode from "./TreeNode";

const MenuTree: React.FC<{
  data: any[];
  onSelect: (node: any) => void;
  activeNode: any;
  setActiveNode: (node: any) => void;
}> = ({ data, onSelect, activeNode, setActiveNode }) => {
  return (
    <ul className="list-none">
      {data.map((node) => (
        <TreeNode
          key={node.id}
          node={node}
          onSelect={onSelect}
          depth={1}
          activeNode={activeNode}
          setActiveNode={setActiveNode}
        />
      ))}
    </ul>
  );
};

export default MenuTree;
