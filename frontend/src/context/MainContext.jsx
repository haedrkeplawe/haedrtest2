import { createContext, useEffect, useState } from "react";

export const MainContext = createContext({});

export function MainContextProvider({ children }) {
  const [Lang, setLang] = useState("ar");

  return (
    <MainContext.Provider value={{ Lang, setLang }}>
      {children}
    </MainContext.Provider>
  );
}
