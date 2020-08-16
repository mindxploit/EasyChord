import React from "react";
import Header from "./new_components/Header";
import { createMuiTheme, ThemeProvider, CssBaseline, Container, Box } from "@material-ui/core";
import Progression from "./new_components/Progression";
import Scale from "./new_components/Scale";
import { GlobalContext } from "./new_components/Context";
import "./assets/App.css";

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
				fontSize: "3rem",
				"@media (max-width:750px)": {
					fontSize: '2rem',
				},
			},
			h2: {
				fontFamily: "Fira Sans",
				fontWeight: "bold",
				fontSize: "8rem",
				"@media (max-width:520px)": {
					fontSize: "5rem",
				},
			},
			body1: {
				fontFamily: "Montserrat",
			},
		},
	});

	return (
		<div
			style={{
				border: "1px solid white",
				height: "100%",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				padding: "3em 0",
			}}
		>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<GlobalContext>
					<Header />
					<Scale />
					<Progression />
				</GlobalContext>
			</ThemeProvider>
		</div>
	);
};

export default App;
