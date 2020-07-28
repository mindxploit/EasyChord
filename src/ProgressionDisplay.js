import React, { useState, useEffect } from "react";
import { Paper, Button, Typography, Switch, Grid } from "@material-ui/core";
import Key from "./Key";

const progressions = {
	minor: [
		[1, 6, 7],
		[1, 4, 7],
		[1, 4, 5],
		[1, 6, 3, 7],
		[2, 5, 1],
		[1, 7, 4, 4],
	],
	major: [
		[1, 4, 5],
		[1, 6, 4, 5],
		[2, 5, 1],
		[1, 5, 6, 4],
		[1, 5, 5, 2],
	],
};

function ProgressionDisplay() {
	const [progression, setProgression] = useState("");
	const [type, setType] = useState("major");
	const [romanProg, setRomanProg] = useState();

	useEffect(() => {
		console.log("Type update");
		handleClick();
	}, [type]);

	useEffect(() => {
		convertInRomans();
	}, [progression]);

	const convertInRomans = () => {
		const romansMajor = ["I", "ii", "iii", "IV", "V", "vi", "vii°"];
		const romansMinor = ["i", "ii°", "III", "iv", "v", "VI", "VII"];
		let numProg = Array.from(progression);

		if (type === "minor") {
			let numRomans = numProg.map((e) => romansMinor[e - 1]);
			setRomanProg(numRomans.toString());
		} else {
			let numRomans = numProg.map((e) => romansMajor[e - 1]);
			setRomanProg(numRomans.toString());
		}
	};

	const handleClick = () => {
		type === "minor"
			? setProgression(progressions.minor[Math.floor(Math.random() * progressions.minor.length)])
			: setProgression(progressions.major[Math.floor(Math.random() * progressions.major.length)]);
	};

	const handleChange = () => {
		if (type === "minor") {
			setType("major");
		} else {
			setType("minor");
		}
	};

	return (
		<div>
			<Paper style={{ marginTop: 20, marginBottom: 20 }} elevation={3}>
				<Typography variant="h1" align="center">
					{romanProg}
				</Typography>
			</Paper>
			<Grid container direction="column" alignItems="center" justify="center" spacing={3}>
				<Grid item>
					<Key type={type} />
				</Grid>
				<Grid item>
					<Switch checked={type === "minor" ? false : true} onChange={handleChange} />
					<Typography variant="button">{type}</Typography>
				</Grid>
				<Grid item>
					<Button variant="contained" onClick={() => handleClick()}>
						Generate progression
					</Button>
				</Grid>
			</Grid>
		</div>
	);
}

export default ProgressionDisplay;
