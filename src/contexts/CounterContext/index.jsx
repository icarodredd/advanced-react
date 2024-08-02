import { createContext } from "react";

const context = createContext();

export const ContextProvider = ({ children }) => {
  return <ContextProvider>{children}</ContextProvider>;
};
