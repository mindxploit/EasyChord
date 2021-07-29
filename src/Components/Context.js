import React, { createContext, useState } from "react";

export const ScaleContext = createContext("F_sharp");
export const ModeContext = createContext("minor");
export const ProgContext = createContext();

export const GlobalContext = ({ children }) => {
  const [scale, setScale] = useState("F_sharp");
  const [mode, setMode] = useState("minor");
  const [progNumber, setProgNumber] = useState();

  return (
    <ScaleContext.Provider value={[scale, setScale]}>
      <ModeContext.Provider value={[mode, setMode]}>
        <ProgContext.Provider value={[progNumber, setProgNumber]}>
          {children}
        </ProgContext.Provider>
      </ModeContext.Provider>
    </ScaleContext.Provider>
  );
};
