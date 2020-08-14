import React from "react";
import Header from "./Header";
import { createMuiTheme, ThemeProvider, CssBaseline } from "@material-ui/core";
import Progression from "./Progression";
import Scale from "./Scale";

const Main = () => {
	const theme = createMuiTheme({
		palette: {
			type: "dark",
		},
		typography: {
			fontFamily: "'Montserrat', 'Fira Sans', sans-serif",
			h1: {
				fontFamily: "Fira Sans",
				fontWeight: "bold",
			},
			body1: {
				fontFamily: "Montserrat",
			},
		},
	});
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<div style={{ height: "100%" }}>
				<Header />
				<Scale />
				<Progression />
			</div>
		</ThemeProvider>
	);
};

export default Main;
