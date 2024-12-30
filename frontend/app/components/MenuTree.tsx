"use client";

import React from "react";
import TreeNode from "./TreeNode";

const MenuTree: React.FC<{ data: any[]; onSelect: (node: any) => void }> = ({
  data,
  onSelect,
}) => {
  return (
    <ul className="list-none">
      {data.map((node) => (
        <TreeNode key={node.id} node={node} onSelect={onSelect} depth={1} />
      ))}
    </ul>
  );
};

export default MenuTree;
