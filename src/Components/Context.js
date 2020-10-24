import React, { createContext, useState } from "react";

export const ScaleContext = createContext("E");
export const ModeContext = createContext("minor");

export const GlobalContext = ({ children }) => {
	const [scale, setScale] = useState("E");
	const [mode, setMode] = useState("minor");

	return (
		<ScaleContext.Provider value={[scale, setScale]}>
			<ModeContext.Provider value={[mode, setMode]}>{children}</ModeContext.Provider>
		</ScaleContext.Provider>
	);
};
