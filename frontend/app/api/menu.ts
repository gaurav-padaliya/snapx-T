import axios from "axios";

const API_BASE = "/api";

export const fetchMenus = async () => {
  const response = await axios.get(`${API_BASE}/menus`);
  return response.data;
};

export const addMenuItem = async (menuId: string, newItem: { name: string; price: number; }) => {
  const response = await axios.post(
    `${API_BASE}/menus/${menuId}/add-item`,
    newItem
  );
  return response.data;
};

export const updateMenuItem = async (
  menuId: string,
  itemId: string,
  updatedData: { name?: string; price?: number }
) => {
  const response = await axios.put(
    `${API_BASE}/menus/${menuId}/items/${itemId}`,
    updatedData
  );
  return response.data;
};

export const deleteMenuItem = async (menuId: string, itemId: string) => {
  const response = await axios.delete(
    `${API_BASE}/menus/${menuId}/items/${itemId}`
  );
  return response.data;
};
