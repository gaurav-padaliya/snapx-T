import React from "react";

const MenuTree: React.FC = () => {
  const menu = [
    {
      name: "System Management",
      children: [
        {
          name: "Systems",
          children: [
            { name: "System Code", children: [{ name: "Code Registration" }] },
            { name: "Properties" },
            { name: "Menus", children: [{ name: "Menu Registration" }] },
          ],
        },
        { name: "API List", children: [{ name: "API Registration" }] },
        { name: "Users & Groups", children: [{ name: "Users" }] },
      ],
    },
  ];

  interface MenuNode {
    name: string;
    children?: MenuNode[];
  }

  const renderTree = (node: MenuNode) => (
    <li key={node.name} className="ml-4">
      <span>{node.name}</span>
      {node.children && (
        <ul className="ml-4 border-l pl-4">
          {node.children.map((child: MenuNode) => renderTree(child))}
        </ul>
      )}
    </li>
  );

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Menus</h2>
      <ul>{menu.map((item) => renderTree(item))}</ul>
    </div>
  );
};

export default MenuTree;
