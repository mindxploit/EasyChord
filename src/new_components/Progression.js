import React, { useState, useContext, useEffect } from "react";
import { Typography, Button } from "@material-ui/core";
import { ModeContext } from "./Context";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
	root: {
		fontFamily: "Montserrat",
		borderRadius: 50,
		fontWeight: "bold",
		fontSize: "1.3em",
		width: 264,
	},
});

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

const Progression = () => {
	const classes = useStyles();
	const [prog, setProg] = useState();
	const [mode] = useContext(ModeContext);

	useEffect(() => {
		handleClick();
	}, [mode]);

	const handleClick = () => {
		mode === "minor"
			? convertInRomans(progressions.minor[Math.floor(Math.random() * progressions.minor.length)])
			: convertInRomans(progressions.major[Math.floor(Math.random() * progressions.major.length)]);
	};

	const convertInRomans = (progression) => {
		const romansMajor = ["I", "ii", "iii", "IV", "V", "vi", "vii°"];
		const romansMinor = ["i", "ii°", "III", "iv", "v", "VI", "VII"];
		let numProg = Array.from(progression);

		if (mode === "minor") {
			let numRomans = numProg.map((e) => romansMinor[e - 1]);
			setProg(numRomans.toString().replace(/,/g, "-"));
		} else {
			let numRomans = numProg.map((e) => romansMajor[e - 1]);
			setProg(numRomans.toString().replace(/,/g, "-"));
		}
	};

	return (
		<div>
			<div style={{ width: "100%", background: "rgba(255, 255, 255, 0.13)" }}>
				<Typography align="center" variant="h2">
					{prog}
				</Typography>
			</div>
			<div
				style={{
					marginTop: "3em",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<Button variant="outlined" className={classes.root} onClick={handleClick}>
					GENERATE
				</Button>
			</div>
		</div>
	);
};

export default Progression;
