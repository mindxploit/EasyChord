import { Checkbox, FormControl, InputLabel, ListItemText, MenuItem, Select } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import { ModeContext, ScaleContext } from './Context';
import { keys, notes } from '../Components/Scales/Scales';

const FilterKey = () => {
	const [scale, setScale] = useContext(ScaleContext);
	const [mode, setMode] = useContext(ModeContext);
  const [currentNotes, setCurrentNotes] = useState([]);
  const [results, setResults] = useState([]);

  const handleChange = (event) => {
    setCurrentNotes(event.target.value);
  }
  
  const calculateKey = () => {
    setResults([])
    
    if (mode === 'minor') {
      let render = []

      for (let i in keys.minor) {
        let output = {};
        let notes = currentNotes.every(note => keys.minor[i].includes(note))
        if (notes) {
          output.root = i
          output.notes = keys.minor[i]
          render.push(output)
        }
      }
      setResults(render)
    } 

    if (mode === 'major') {
      let render = []

      for (let i in keys.major) {
        let output = {};
        let notes = currentNotes.every(note => keys.major[i].includes(note))
        if (notes) {
          output.root = i
          output.notes = keys.major[i]
          render.push(output)
        }
      }
      setResults(render)
    }
  }
  
  useEffect(() => {
    calculateKey() 
  }, [currentNotes])

  useEffect(() => {
    // console.log(results)
    results.length > 0 && setScale(results[0].root)
  }, [results])

  return (
    <div>
      <FormControl style={{ width: 130 }}>
        <InputLabel id="key-checkbox">Filter by note</InputLabel>
        <Select
          labelId="mutiple-checkbox-key"
          id="mutiple-checkbox-key"
          multiple
          value={currentNotes}
          onChange={handleChange}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={{
            getContentAnchorEl: () => null,
          }}
        >
          {
            notes.map(item => (
              <MenuItem key={item.value} value={item.value}>
                <Checkbox checked={currentNotes.indexOf(item.value) > -1} />
                <ListItemText primary={item.note} />
              </MenuItem>
            ))
          }
        </Select>
      </FormControl>
    </div>
  )
}

export default FilterKey
