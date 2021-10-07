import React, { useState, useContext, useEffect } from "react";
import { Typography, Button, IconButton, Paper } from "@material-ui/core";
import { Fade } from "react-reveal"
import { ModeContext, ProgContext, ScaleContext } from "./Context";
import { makeStyles } from "@material-ui/core/styles";
import styled from 'styled-components';
import { keys } from "./Scales/Scales";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import * as Tone from 'tone'

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
    [4, 5, 6],
    [1, 6, 4, 5],
    [2, 5, 1],
    [1, 5, 6, 4],
    [1, 5, 5, 2],
  ],
};

const Progression = () => {
  const classes = useStyles();
  const [prog, setProg] = useState([])
  const [progNumber, setProgNumber] = useContext(ProgContext);
  const [mode] = useContext(ModeContext);
  const [scale] = useContext(ScaleContext)
  const scaleNotes = keys[mode][scale]
  const [playing, setPlaying] = useState(false);

  const synth = new Tone.PolySynth().toDestination();
  
  const Chord = styled(Paper)`
    width: 180px;
  `

  const ButtonContainer = styled.div`
    margin-top: 3em;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  const TextContainer = styled.div`
    width: 100%;	
    padding: 20px 0;
    background: rgba(255, 255, 255, 0.13);
    box-shadow: 0px 5px 13px 0px rgba(0,0,0,0.2);
    display: flex;
    justify-content: space-evenly;
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
      // let convertedProg = numRomans.toString().replace(/,/g, "-");
      prog === numRomans ? handleClick() : setProg(numRomans);
    } else {
      let numRomans = numProg.map((e) => romansMajor[e - 1]);
      // let convertedProg = numRomans.toString().replace(/,/g, "-");
      prog === numRomans ? handleClick() : setProg(numRomans);
    }
  };

  const handlePlay = () => {
    setPlaying(true)

    const calculateChord = (scale, progression) => {
      // duplicating scale until i find a way to loop back to the beginning of the array
      const doubleScale = scale.concat(scale);
      
      const chords = progNumber.map((el, i) => {
        const root = progression[i] - 1
        const chord = [doubleScale[root]]
        chord.push(doubleScale[root + 2])
        chord.push(doubleScale[root + 4])
        return chord
      })
      
      console.log(chords);

      return chords
    }

    const playCordProg = (chords) => {
      const now = Tone.now()
      chords.forEach((chord, index) => synth.triggerAttackRelease(chord, 1.5, now + index * 2, 0.7))
      setTimeout(() => setPlaying(false), `${chords.length * 2}000`);
    }
  
    if (progNumber) {
      const chords = calculateChord(scaleNotes, progNumber);

      let finalChords = []

      chords.forEach((group) => {
        finalChords.push(group.map(note => `${note}4`))
      });

      console.log(finalChords)

      // added sub octave
      finalChords.forEach(chord => chord.push(`${chord[0][0]}2`))
      playCordProg(finalChords)
    }
  }

  return (
    <div>
      <TextContainer>
        {prog && prog.map((el) => (
          <Fade>
            <Chord elevation={3}>
              <Typography align="center" variant="h2">
                {el}
              </Typography>
            </Chord>
          </Fade>
        ))}
      </TextContainer>
      <ButtonContainer>
        <Button variant="outlined" className={classes.root} onClick={handleClick}>
          GENERATE
        </Button>
        <IconButton style={{ marginLeft: 4 }} disabled={playing} onClick={handlePlay}>
          <PlayArrowIcon />
        </IconButton>
      </ButtonContainer>
    </div>
  );
};

export default Progression;
