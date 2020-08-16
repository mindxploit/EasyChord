import React from "react";
import Selector from "./Selector";
import Piano from "./Piano";
import Description from "./Description";
import { Box } from "@material-ui/core";

const Scale = () => {
	return (
		<div style={{ width: "90%", margin: "auto", padding: "3em 0" }}>
			<Box
				display="flex"
				justifyContent="space-between"
				alignItems={{ xs: "center", lg: "flex-start" }}
				flexDirection={{ xs: "column", lg: "row" }}
			>
				<Box mr={{ lg: "2em" }} mb={{ xs: "2em", lg: "0" }}>
					<Piano />
				</Box>
				<Box display="flex" flexDirection="column" justifyContent="space-around" width="100%">
					<Selector />
					<Description />
				</Box>
			</Box>
		</div>
	);
};

export default Scale;
