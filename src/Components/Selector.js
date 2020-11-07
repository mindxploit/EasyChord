import React from "react";
import ScaleSelector from "./ScaleSelector";
import ModeSelector from "./ModeSelector";
import FilterKey from "./FilterKey";
import { Box } from "@material-ui/core";

const Selector = () => {
	return (
		<Box display="flex" justifyContent={{ xs: "center", lg: "flex-start" }}>
			<ScaleSelector />
			<ModeSelector />
			<FilterKey />
		</Box>
	);
};

export default Selector;
