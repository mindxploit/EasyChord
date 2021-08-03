import React, { useContext, useEffect } from "react"
import { ModeContext, ProgContext, ScaleContext } from "./Context"
import styled from 'styled-components'
import { keys, notes } from "./Scales/Scales"
import Media from 'react-media';

const Container = styled.div`
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
  width: 55px;
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
  
  const isSharp = (mode, scale) => {
    if (mode === 'minor') {
      const scaleWithSharps = ['E', 'B', 'F_sharp', 'C_sharp']
      if (scaleWithSharps.includes(scale)) {
        return true
      } else {
        return false
      }
    } else {
      const scaleWithSharps = ['G', 'D', 'A', 'E', 'B', 'C_sharp', 'F_sharp']
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
    const allNotes = notes.map(n => n.note);
    
    const keysRender = allNotes.map(note => {
      const blackNote = hasSharp ? note.slice(0, 2) : note.slice(3);

      return (
        note.length === 1 ? (
          <WhiteKey root={scale === note} inKey={scaleNotes.includes(note)}>
            <NoteName>{note[0]}</NoteName>
          </WhiteKey>
        ) : (
          <BlackKey root={scaleNotes[0] === blackNote} inKey={scaleNotes.includes(blackNote)}>
            <NoteName>{blackNote}</NoteName>
          </BlackKey>
        )
      )
    })

    console.log(scaleNotes);
    return keysRender
  }

  return (
    <Media query="(max-width: 470px)">
      { match =>
        match ? (
          <Container>
            <Octave />
          </Container>
        ) : (
          <Container>
            <Octave />
            <Octave />
          </Container>
        )}
    </Media>
  );
};

export default Piano;
