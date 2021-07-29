import React, { createContext, useState } from "react";

export const ScaleContext = createContext("F_sharp");
export const ModeContext = createContext("minor");

export const GlobalContext = ({ children }) => {
  const [scale, setScale] = useState("F_sharp");
  const [mode, setMode] = useState("minor");

  return (
    <ScaleContext.Provider value={[scale, setScale]}>
      <ModeContext.Provider value={[mode, setMode]}>
        {children}
      </ModeContext.Provider>
    </ScaleContext.Provider>
  );
};
