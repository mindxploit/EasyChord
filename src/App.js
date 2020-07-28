import React from "react";
import { Typography, Container } from "@material-ui/core";
import ProgressionDisplay from "./ProgressionDisplay";

function App() {
	return (
		<Container>
			<Typography align="center" variant="h2">
				Let's find the best chord progression for you.
			</Typography>
			<ProgressionDisplay />
		</Container>
	);
}

export default App;
