import React, { createContext, useReducer, useContext } from "react";

// Define actions
const TOGGLE_ALL = "TOGGLE_ALL";
const TOGGLE_NONE = "TOGGLE_NONE";

// Initial state
const initialState = { isExpanded: false };

// Reducer function
const treeReducer = (state: any, action: any) => {
  switch (action.type) {
    case TOGGLE_ALL:
      return { ...state, isExpanded: action.payload };
    case TOGGLE_NONE:
      return { ...state, isExpanded: action.payload };
    default:
      return state;
  }
};

// Create context
const TreeContext = createContext<any>(null);

// Provider component
export const TreeProvider: React.FC<any> = ({ children }) => {
  const [state, dispatch] = useReducer(treeReducer, initialState);

  return (
    <TreeContext.Provider value={{ state, dispatch }}>
      {children}
    </TreeContext.Provider>
  );
};

// Custom hook to use the TreeContext
export const useTreeContext = () => {
  const context = useContext(TreeContext);
  if (!context) {
    throw new Error("useTreeContext must be used within a TreeProvider");
  }
  return context;
};
