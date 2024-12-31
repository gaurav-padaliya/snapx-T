// api/menu.ts
import axios from "axios";

const API_BASE = "http://localhost:5002"; // Replace with your backend base URL

// Fetch all menus
export const fetchMenus = async () => {
  try {
    const response = await axios.get(`${API_BASE}/menus`);
    return response.data;
  } catch (error) {
    console.error("Error fetching menus:", error);
    throw error;
  }
};

// Add a new menu item
export const addMenuItem = async (menuItem: any) => {
  try {
    const response = await axios.post(`${API_BASE}/menus`, menuItem);
    return response.data;
  } catch (error) {
    console.error("Error adding menu item:", error);
    throw error;
  }
};

// Update an existing menu item
export const updateMenuItem = async (id: any, updatedData: any) => {
  try {
    const response = await axios.patch(`${API_BASE}/menus/${id}`, updatedData);
    return response.data;
  } catch (error) {
    console.error("Error updating menu item:", error);
    throw error;
  }
};

// Delete a menu item
export const deleteMenuItem = async (id: any) => {
  try {
    const response = await axios.delete(`${API_BASE}/menus/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting menu item:", error);
    throw error;
  }
};
