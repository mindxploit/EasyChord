import React, { useState, useContext, useEffect } from "react";
import { Typography, Button } from "@material-ui/core";
import { ModeContext, ProgContext } from "./Context";
import { makeStyles } from "@material-ui/core/styles";
import styled from 'styled-components';

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
  const [prog, setProg] = useState()
  const [progNumber, setProgNumber] = useContext(ProgContext);
  const [mode] = useContext(ModeContext);

  const ButtonContainer = styled.div`
    margin-top: 3em;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  const TextContainer = styled.div`
    width: 100%;	
    background: rgba(255, 255, 255, 0.13);
    box-shadow: 0px 5px 13px 0px rgba(0,0,0,0.2);
  `;

  useEffect(() => {
    handleClick();
  }, [mode]);

  const handleClick = () => {
    mode === "minor"
      ? convertInRomans(progressions.minor[Math.floor(Math.random() * progressions.minor.length)])
      : convertInRomans(progressions.major[Math.floor(Math.random() * progressions.major.length)]);
  };

  const convertInRomans = (progression) => {
    setProgNumber(progression);
    const romansMajor = ["I", "ii", "iii", "IV", "V", "vi", "vii°"];
    const romansMinor = ["i", "ii°", "III", "iv", "v", "VI", "VII"];
    let numProg = Array.from(progression);

    if (mode === "minor") {
      let numRomans = numProg.map((e) => romansMinor[e - 1]);
      let convertedProg = numRomans.toString().replace(/,/g, "-");
      prog === convertedProg ? handleClick() : setProg(convertedProg);
    } else {
      let numRomans = numProg.map((e) => romansMajor[e - 1]);
      let convertedProg = numRomans.toString().replace(/,/g, "-");
      prog === convertedProg ? handleClick() : setProg(convertedProg);
    }
  };

  return (
    <div>
      <TextContainer>
        <Typography align="center" variant="h2">
          {prog}
        </Typography>
      </TextContainer>
      <ButtonContainer>
        <Button variant="outlined" className={classes.root} onClick={handleClick}>
          GENERATE
        </Button>
      </ButtonContainer>
    </div>
  );
};

export default Progression;
