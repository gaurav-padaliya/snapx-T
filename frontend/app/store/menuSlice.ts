import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MenuItem {
  id: string;
  name: string;
  children: MenuItem[];
}

interface MenuState {
  menus: MenuItem[];
  loading: boolean;
}

const initialState: MenuState = {
  menus: [],
  loading: false,
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setMenus: (state, action: PayloadAction<MenuItem[]>) => {
      state.menus = action.payload;
    },
    addMenuItem: (
      state,
      action: PayloadAction<{ parentId: string; item: MenuItem }>
    ) => {
      const addItem = (menus: MenuItem[], parentId: string, item: MenuItem): MenuItem[] => {
        return menus.map(menu => {
          if (menu.id === parentId) {
            return { ...menu, children: [...menu.children, item] };
          }
          if (menu.children.length > 0) {
            return { ...menu, children: addItem(menu.children, parentId, item) };
          }
          return menu;
        });
      };
      state.menus = addItem(state.menus, action.payload.parentId, action.payload.item);
    },
    updateMenuItem: (
      state,
      action: PayloadAction<{ id: string; name: string }>
    ) => {
      const updateItem = (menus: MenuItem[], id: string, name: string): MenuItem[] => {
        return menus.map(menu => {
          if (menu.id === id) {
            return { ...menu, name };
          }
          if (menu.children.length > 0) {
            return { ...menu, children: updateItem(menu.children, id, name) };
          }
          return menu;
        });
      };
      state.menus = updateItem(state.menus, action.payload.id, action.payload.name);
    },
    deleteMenuItem: (state, action: PayloadAction<string>) => {
      const deleteItem = (menus: MenuItem[], id: string): MenuItem[] => {
        return menus
          .filter(menu => menu.id !== id)
          .map(menu => ({
            ...menu,
            children: deleteItem(menu.children, id),
          }));
      };
      state.menus = deleteItem(state.menus, action.payload);
    },
  },
});

export const { setMenus, addMenuItem, updateMenuItem, deleteMenuItem } =
  menuSlice.actions;
export default menuSlice.reducer;
