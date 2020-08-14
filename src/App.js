import React from "react";
import Header from "./new_components/Header";
import { createMuiTheme, ThemeProvider, CssBaseline } from "@material-ui/core";
import Progression from "./new_components/Progression";
import Scale from "./new_components/Scale";
import "./assets/App.css";
import { GlobalContext } from "./new_components/Context";

const App = () => {
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
			<GlobalContext>
				<div style={{ padding: "4em 0" }}>
					<Header />
					<Scale />
					<Progression />
				</div>
			</GlobalContext>
		</ThemeProvider>
	);
};

export default App;
