export const notes = [
  {note: 'C', value: 'C'},
  {note: 'C#/Db', value: 'C_sharp'},
  {note: 'D', value: 'D'},
  {note: 'D#/Eb', value: 'Eb'},
  {note: 'E', value: 'E'},
  {note: 'F', value: 'F'},
  {note: 'F#/Gb', value: 'F_sharp'},
  {note: 'G', value: 'G'},
  {note: 'G#/Ab', value: 'Ab'},
  {note: 'A', value: 'A'},
  {note: 'A#/Bb', value: 'Bb'},
  {note: 'B', value: 'B'},
]

export const keys = {
  major: {
    C: ['C', 'D', 'E', 'F', 'G', 'A', 'B'],
    C_sharp: ['C_sharp', 'Eb', 'F', 'F_sharp', 'Ab', 'Bb', 'C'],
    D: ['D', 'E', 'F_sharp', 'G', 'A', 'B', 'C_sharp'],
    Eb: ['Eb', 'F', 'G', 'Ab', 'Bb', 'C', 'D'],
    E: ['E', 'F_sharp', 'Ab', 'A', 'B', 'C_sharp', 'Eb'],
    F: ['F', 'G', 'A', 'Bb', 'C', 'D', 'E'],
    F_sharp: ['F_sharp', 'Ab', 'Bb', 'B', 'C_sharp', 'Eb', 'F'],
    G: ['G', 'A', 'B', 'C', 'D', 'E', 'F_sharp'],
    Ab: ['Ab', 'Bb', 'C', 'Db', 'Eb', 'F', 'G'],
    A: ['A', 'B', 'C_sharp', 'D', 'E', 'F_sharp', 'Ab'],
    Bb: ['Bb', 'C', 'D', 'Eb', 'F', 'G', 'A'],
    B: ['B', 'C_sharp', 'Eb', 'E', 'F_sharp', 'Ab', 'Bb']
  },
  minor : {
    A: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
    Bb: ['Bb', 'C', 'C_sharp', 'Eb', 'F', 'F_sharp', 'Ab'],
    B: ['B', 'C_sharp', 'D', 'E', 'F_sharp', 'G', 'A'],
    C: ['C', 'D', 'Eb', 'F', 'G', 'Ab', 'Bb', 'C'],
    C_sharp: ['C_sharp', 'Eb', 'E', 'F_sharp', 'Ab', 'A', 'B'],
    D: ['D', 'E', 'F', 'G', 'A', 'Bb', 'C'],
    Eb: ['Eb', 'F', 'F_sharp', 'Ab', 'Bb', 'B', 'C_sharp'],
    E: ['E', 'F_sharp', 'G', 'A', 'B', 'C', 'D'],
    F: ['F', 'G', 'Ab', 'Bb', 'C', 'Db', 'Eb'],
    F_sharp: ['F_sharp', 'Ab', 'A', 'B', 'C_sharp', 'D', 'E'],
    G: ['G', 'A', 'Bb', 'C', 'D', 'Eb', 'F'],
    Ab: ['Ab', 'Bb', 'B', 'C_sharp', 'Eb', 'E', 'F_sharp']
  }
}