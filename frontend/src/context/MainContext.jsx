import { createContext, useEffect, useState } from "react";

export const MainContext = createContext({});

export function MainContextProvider({ children }) {
  const Lang = "a";
  return (
    <MainContext.Provider value={{ Lang }}>{children}</MainContext.Provider>
  );
}
