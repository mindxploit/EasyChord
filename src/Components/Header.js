import React from "react";
import { Typography } from "@material-ui/core";

const Header = () => {
	return (
		<div style={{ margin: '0 2em' }}>
			<Typography align="center" variant="h1">
				Welcome, let’s pick a key and start playing!
			</Typography>
		</div>
	);
};

export default Header;
