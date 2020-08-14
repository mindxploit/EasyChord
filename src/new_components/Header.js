import React from "react";
import { Typography } from "@material-ui/core";

const Header = () => {
	return (
		<Typography align="center" style={{ fontSize: "4rem", paddingTop: "0.5em" }} variant="h1">
			Welcome, let’s pick a key and start playing!
		</Typography>
	);
};

export default Header;
