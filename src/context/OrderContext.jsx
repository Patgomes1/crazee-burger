import { createContext } from 'react';

export default createContext({
  isAdmin: false,
  setIsAdmin: () => {},

  isCollapsed: false,
  setIsCollapsed: () => {},

  isAddTabSelected: false,
  setIsAddTabSelected: () => {},

  isEditTabSelected: false,
  setIsEditTabSelected: () => {},

  currentTabSelected: false,
  setCurrentTabSelected: () => {},

  menu: [],
  handleAddProduct: () => {},
});
