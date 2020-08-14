import React from "react";
import Selector from "./Selector";
import Piano from "./Piano";
import Description from "./Description";
import { Box, Container } from "@material-ui/core";

const Scale = () => {
	return (
		<div style={{ padding: "0 3em", margin: "5em 0" }}>
			<Box display="flex" justifyContent="space-between" alignItems="flex-start">
				<Box>
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
