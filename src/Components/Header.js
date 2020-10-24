import React from "react";
import { Typography } from "@material-ui/core";
import styled from 'styled-components';

const Header = () => {
	
	const TextContainer = styled.div`
		margin: 0 2em;
		@media (max-width: 480px) {
			display: none;
		}
	`
	
	return (
		<TextContainer>
			<Typography align="center" variant="h1">
				Welcome, let’s pick a key and start playing!
			</Typography>
		</TextContainer>
	);
};

export default Header;
