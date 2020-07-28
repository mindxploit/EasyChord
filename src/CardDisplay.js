import React from "react";
import { Paper, Typography } from "@material-ui/core";

function CardDisplay({ type, scale, displayDescription }) {
	return (
		<div>
			<Paper
				elevation={4}
				style={{
					padding: 20,
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<img
					style={{ paddingBottom: 5 }}
					src={require(`./Scales/${type}_scales/${scale}.png`)}
					alt="scale"
				/>
				<Typography align="center" variant="subtitle1">
					{displayDescription()}
				</Typography>
			</Paper>
		</div>
	);
}

export default CardDisplay;
