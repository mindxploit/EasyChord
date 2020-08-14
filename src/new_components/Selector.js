import React from "react";
import ScaleSelector from "./ScaleSelector";
import ModeSelector from "./ModeSelector";

const Selector = () => {
	return (
		<div style={{ display: "flex" }}>
			<ScaleSelector />
			<ModeSelector />
		</div>
	);
};

export default Selector;
