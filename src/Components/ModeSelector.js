import React, { useContext } from "react";
import { Switch, Typography } from "@material-ui/core";
import { ModeContext } from "./Context";

const ModeSelector = () => {
	const [mode, setMode] = useContext(ModeContext);

	const handleChange = () => {
		mode === "minor" ? setMode("major") : setMode("minor");
	};

	return (
		<div style={{ display: "flex", alignItems: "center" }}>
			<Typography variation="body1">{mode}</Typography>
			<Switch onChange={handleChange} checked={mode === "major" ? true : false} />
		</div>
	);
};

export default ModeSelector;
