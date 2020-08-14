import React, { useContext } from "react";
import { ModeContext, ScaleContext } from "./Context";

const Piano = () => {
	const [scale] = useContext(ScaleContext);
	const [mode] = useContext(ModeContext);
	return (
		<img
			style={{ width: 687, maxWidth: 687, maxHeight: 227, height: "100%", display: "block" }}
			src={require(`../Components/Scales/${mode}_scales/${scale}.png`)}
			alt="scale"
		/>
	);
};

export default Piano;
