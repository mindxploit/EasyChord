import React from "react";
import Header from "./new_components/Header";
import { createMuiTheme, ThemeProvider, CssBaseline, Container, Box } from "@material-ui/core";
import Progression from "./new_components/Progression";
import Scale from "./new_components/Scale";
import { GlobalContext } from "./new_components/Context";
import { Fade } from "react-reveal";
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
					fontSize: "2rem",
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
		<Box display="flex" alignContent="center" alignItems="center" minHeight={{ md: "100vh" }}>
			<div
				style={{
					border: "2px solid rgba(255,255,255, 0.9)",
					height: "100%",
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					padding: "3em 0",
					borderRadius: 20,
				}}
			>
				<ThemeProvider theme={theme}>
					<CssBaseline />
					<GlobalContext>
						<Fade top duration={2000}>
							<Header />
						</Fade>
						<Fade delay={1000} duration={2000}>
							<Scale />
						</Fade>
						<Fade delay={2000} duration={2000}>
							<Progression />
						</Fade>
					</GlobalContext>
				</ThemeProvider>
			</div>
		</Box>
	);
};

export default App;
