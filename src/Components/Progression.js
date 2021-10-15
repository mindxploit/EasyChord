import React, { useState, useContext, useEffect } from "react";
import { Typography, Button, IconButton, Paper, Dialog } from "@material-ui/core";
import { ModeContext, ProgContext, ScaleContext } from "./Context";
import { makeStyles } from "@material-ui/core/styles";
import { keys, progressions, romansMajor, romansMinor } from "./Scales/Scales";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import styled from 'styled-components';
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

const ChordsContainer = styled.div`
  display: flex;
  > * {
    padding: 0.2em 0.5em;
    cursor: pointer;
  }

  overflow: hidden;
`

const Chord = styled(Paper)`
  width: 180px;
  padding-bottom: 10px;
  cursor: pointer;
  user-select: none;
  @media (max-width: 480px) {
    width: 90px;
  }
  &:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
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

const Progression = () => {
  const classes = useStyles();
  const [prog, setProg] = useState([])
  const [selectedChord, setSelectedChord] = useState(null)
  const [open, setOpen] = useState(false)
  const [progNumber, setProgNumber] = useContext(ProgContext);
  const [mode] = useContext(ModeContext);
  const [scale] = useContext(ScaleContext)
  const scaleNotes = keys[mode][scale]
  const [playing, setPlaying] = useState(false);

  const synth = new Tone.PolySynth().toDestination();
  
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
      
      return chords
    }

    const playCordProg = (chords) => {
      const now = Tone.now()
      chords.forEach((chord, index) => synth.triggerAttackRelease(chord, 1.5, now + index * 2, 0.6))
      setTimeout(() => setPlaying(false), `${chords.length * 2}000`);
    }
  
    if (progNumber) {
      const chords = calculateChord(scaleNotes, progNumber);

      let finalChords = []

      chords.forEach((group) => {
        finalChords.push(group.map(note => `${note}4`))
      });

      // added sub octave
      finalChords.forEach(chord => chord.push(`${chord[0][0]}2`))
      playCordProg(finalChords)
    }
  }
  
  const handleClose = () => {
    setOpen(false)
  }
  
  const modifyProgression = (i) => {
    const newProg = [...progNumber]
    newProg[selectedChord] = i + 1

    setProgNumber(newProg)
    convertInRomans(newProg)
    setSelectedChord(null)
    setOpen(false)
  }

  return (
    <div>
      <Dialog maxWidth="md" open={open} onClose={handleClose}>
        <ChordsContainer>
          { mode === 'minor' ?
            romansMinor.map((el, i) => <Typography onClick={() => modifyProgression(i)} variant="h3">{el}</Typography>) :
            romansMajor.map((el, i) => <Typography onClick={() => modifyProgression(i)} variant="h3">{el}</Typography>) }
        </ChordsContainer>
      </Dialog>
      <TextContainer>
        {prog && prog.map((el, index) => (
          <Chord
            onClick={() => {
            setSelectedChord(index);
            setOpen(!open)
          }} elevation={0}>
            <Typography align="center" variant="h2">
              {el}
            </Typography>
            <Typography variant="h6" align="center">
              {scaleNotes[progNumber[index] - 1]}
            </Typography>
          </Chord>
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
