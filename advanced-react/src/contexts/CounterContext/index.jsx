import { createContext } from "react";
import { initialState } from "./data";

export const context = createContext();

export const ContextProvider = ({ children }) => {
  return <context.Provider value={initialState}>{children}</context.Provider>;
};
