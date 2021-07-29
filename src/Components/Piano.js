import React, { useContext, useEffect } from "react"
import { ModeContext, ProgContext, ScaleContext } from "./Context"
import styled from 'styled-components'
import { keys, notes } from "./Scales/Scales"
import * as Tone from 'tone'

const Container = styled.div`
  /* border: 1px solid black; */
  display: flex;
  width: 650px;
  max-height: 216px;
  max-width: 85vw;
  box-shadow: 0px 10px 13px 0px rgba(0,0,0,0.3);

  p {
    font-family: 'Montserrat';
    font-weight: bold;
  }
`

const WhiteKey = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  height: 200px;
  width: 50px;
  background-color: ${p => p.inKey ? 'white' : 'white'};
  border: 1px solid #AAAAAA;

  ${({ inKey }) => !inKey && `
    p {
      display: none;
    }
  `}

  ${({ root }) => root && `
    p {
      text-decoration: underline red;
      text-underline-offset: 2px;
    }
  `}
`

const BlackKey = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  height: 120px;
  width: 35px;
  background-color: ${p => p.inKey ? '#000000' : '#808080'};
  border: 1px solid #AAAAAA;
  z-index: 2;
  margin: 0 -18px;

  p {
    color: white;
  }

  ${({ inKey }) => !inKey && `
    p {
      display: none;
    }
  `}

  ${({ root }) => root && `
    p {
      text-decoration: underline red;
      text-underline-offset: 2px;
    }
  `}
`
const NoteName = styled.p`
  position: absolute;
  bottom: 5px;
  color: black;
`

const Piano = () => {
  const [scale] = useContext(ScaleContext)
  const [mode] = useContext(ModeContext)
  const [progNumber, setProgNumber] = useContext(ProgContext);
  const scaleNotes = keys[mode][scale]
  
  const synth = new Tone.PolySynth().toDestination();
  
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

    // const octaveChords = chords.map(chord => {
    //   chords.map((note, i) => `${note[i]}3`)
    // });

    // console.log(octaveChords)
    return chords
  }

  
  useEffect(() => {
    if (progNumber) {
      const chords = calculateChord(scaleNotes, progNumber);

      let finalChords = []

      chords.forEach((group) => {
        finalChords.push(group.map(note => `${note}4`))
      });

      console.log(finalChords)
      playCordProg(finalChords)
    }

  }, [progNumber])
  
  const playCordProg = (chords) => {
    // setInterval(() => synth.triggerAttackRelease(chords[0], "4n"), 2000)
  }
  
  const isSharp = (mode, scale) => {
    if (mode === 'minor') {
      const scaleWithSharps = ['E', 'B', 'F_sharp', 'C_sharp', 'Ab']
      if (scaleWithSharps.includes(scale)) {
        return true
      } else {
        return false
      }
    } else {
      const scaleWithSharps = ['G', 'D', 'A', 'E', 'B']
      if (scaleWithSharps.includes(scale)) {
        return true
      } else {
        return false
      }
    }
  }
  
  const Octave = () => {
    const scaleNotes = keys[mode][scale]
    const hasSharp = isSharp(mode, scale)
    const allNotes = notes.map(n => n.value);
    
    const keysRender = allNotes.map(note => {
      return (
        note.length === 1 ? (
          <WhiteKey root={scale === note} inKey={scaleNotes.includes(note)}>
            <NoteName>{note[0]}</NoteName>
          </WhiteKey>
        ) : (
          <BlackKey root={scale === note} inKey={scaleNotes.includes(note)}>
            <NoteName>{note[0]}{hasSharp ? '#' : 'b'}</NoteName>
          </BlackKey>
        )
      )
    })
    
    return keysRender
  }

  return (
    <Container>
      <>
        <Octave />
      </>
      <>
        <Octave />
      </>
    </Container>
  );
};

export default Piano;
