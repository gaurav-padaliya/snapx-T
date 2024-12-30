"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { fetchMenus } from "@/app/api/menu";

const MenuList: React.FC = () => {
  const dispatch = useDispatch();
  const { menus } = useSelector((state: RootState) => state.menu);

  useEffect(() => {
    const loadMenus = async () => {
      const data = await fetchMenus();
      dispatch({ type: "menu/setMenus", payload: data });
    };
    loadMenus();
  }, [dispatch]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Menu List</h1>
      <ul>
        {menus.map((menu) => (
          <li key={menu.id} className="mb-2">
            {menu.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuList;
