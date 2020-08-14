import React, { useContext } from "react";
import { ModeContext, ScaleContext } from "./Context";

const Piano = () => {
	const [scale] = useContext(ScaleContext);
	const [mode] = useContext(ModeContext);
	return (
		<div>
			<img
				style={{ width: 687, maxWidth: 687, maxHeight: 229 }}
				src={require(`../Components/Scales/${mode}_scales/${scale}.png`)}
				alt="scale"
			/>
		</div>
	);
};

export default Piano;
