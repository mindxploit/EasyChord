import React from "react";
import Selector from "./Selector";
import Piano from "./Piano";
import Description from "./Description";
import { Box } from "@material-ui/core";

const Scale = () => {
	return (
		<div style={{ width: "90%", margin: "auto", padding: "3em 0" }}>
			<Box display="flex" justifyContent="space-between" alignItems="flex-start">
				<Box width="100%" maxWidth="687px" maxHeight="227px">
					<Piano />
				</Box>
				<Box
					display="flex"
					flexDirection="column"
					justifyContent="space-around"
					style={{ marginLeft: "2em" }}
				>
					<Selector />
					<Description />
				</Box>
			</Box>
		</div>
	);
};

export default Scale;
