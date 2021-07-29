import React, { useContext } from "react"
import { ModeContext, ScaleContext } from "./Context"
import styled from 'styled-components'
import { keys, notes } from "./Scales/Scales"

const Container = styled.div`
  /* border: 1px solid black; */
  display: flex;
  width: 650px;
  max-height: 216px;
  max-width: 85vw;
`

const WhiteKey = styled.div`
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
`

const BlackKey = styled.div`
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
`
const NoteName = styled.p`
  position: absolute;
  bottom: 5px;
  color: black;
`

const Piano = () => {
  const [scale] = useContext(ScaleContext)
  const [mode] = useContext(ModeContext)
  
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

    return (
      <>
        <WhiteKey inKey={scaleNotes.includes('C')}>
          <NoteName>C</NoteName>
        </WhiteKey>
        <BlackKey inKey={scaleNotes.includes('C_sharp')}>
          <NoteName>{hasSharp ? 'C#' : 'Db'}</NoteName>
        </BlackKey>
        <WhiteKey inKey={scaleNotes.includes('D')}>
          <NoteName>D</NoteName>
        </WhiteKey>
        <BlackKey inKey={scaleNotes.includes('Eb')}>
          <NoteName>{hasSharp ? 'D#' : 'Eb'}</NoteName>
        </BlackKey>
        <WhiteKey inKey={scaleNotes.includes('E')}>
          <NoteName>E</NoteName>
        </WhiteKey>
        <WhiteKey inKey={scaleNotes.includes('F')}>
          <NoteName>F</NoteName>
        </WhiteKey>
        <BlackKey inKey={scaleNotes.includes('F_sharp')}>
          <NoteName>{hasSharp ? 'F#' : 'Gb'}</NoteName>
        </BlackKey>
        <WhiteKey inKey={scaleNotes.includes('G')}>
          <NoteName>G</NoteName>
        </WhiteKey>
        <BlackKey inKey={scaleNotes.includes('Ab')}>
          <NoteName>{hasSharp ? 'G#' : 'Ab'}</NoteName>
        </BlackKey>
        <WhiteKey inKey={scaleNotes.includes('A')}>
          <NoteName>A</NoteName>
        </WhiteKey>
        <BlackKey inKey={scaleNotes.includes('Bb')}>
          <NoteName>{hasSharp ? 'A#' : 'Bb'}</NoteName>
        </BlackKey>
        <WhiteKey inKey={scaleNotes.includes('B')}>
          <NoteName>B</NoteName>
        </WhiteKey>
      </>
    )
  }

  return (
    <Container>
      <Octave />
      <Octave />
    </Container>
  );
};

export default Piano;
