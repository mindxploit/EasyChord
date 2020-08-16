import React from "react";
import ScaleSelector from "./ScaleSelector";
import ModeSelector from "./ModeSelector";
import { Box } from "@material-ui/core";

const Selector = () => {
	return (
		<Box display="flex">
			<ScaleSelector />
			<ModeSelector />
		</Box>
	);
};

export default Selector;
