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

  ${({ root }) => root && `
    p {
      text-decoration: underline red;
      text-underline-offset: 2px;
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
