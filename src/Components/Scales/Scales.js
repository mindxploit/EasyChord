export const notes = [
  {note: 'C', value: 'C'},
  {note: 'C#/Db', value: 'C#'},
  {note: 'D', value: 'D'},
  {note: 'D#/Eb', value: 'Eb'},
  {note: 'E', value: 'E'},
  {note: 'F', value: 'F'},
  {note: 'F#/Gb', value: 'F#'},
  {note: 'G', value: 'G'},
  {note: 'G#/Ab', value: 'Ab'},
  {note: 'A', value: 'A'},
  {note: 'A#/Bb', value: 'Bb'},
  {note: 'B', value: 'B'},
]

export const keys = {
  major: {
    C: ['C', 'D', 'E', 'F', 'G', 'A', 'B'],
    C_sharp: ['C#', 'Eb', 'F', 'F#', 'Ab', 'Bb', 'C'],
    D: ['D', 'E', 'F#', 'G', 'A', 'B', 'C#'],
    Eb: ['Eb', 'F', 'G', 'Ab', 'Bb', 'C', 'D'],
    E: ['E', 'F#', 'Ab', 'A', 'B', 'C#', 'Eb'],
    F: ['F', 'G', 'A', 'Bb', 'C', 'D', 'E'],
    F_sharp: ['F#', 'Ab', 'Bb', 'B', 'C#', 'Eb', 'F'],
    G: ['G', 'A', 'B', 'C', 'D', 'E', 'F#'],
    Ab: ['Ab', 'Bb', 'C', 'Db', 'Eb', 'F', 'G'],
    A: ['A', 'B', 'C#', 'D', 'E', 'F#', 'Ab'],
    Bb: ['Bb', 'C', 'D', 'Eb', 'F', 'G', 'A'],
    B: ['B', 'C#', 'Eb', 'E', 'F#', 'Ab', 'Bb']
  },
  minor : {
    A: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
    Bb: ['Bb', 'C', 'C#', 'Eb', 'F', 'F#', 'Ab'],
    B: ['B', 'C#', 'D', 'E', 'F#', 'G', 'A'],
    C: ['C', 'D', 'Eb', 'F', 'G', 'Ab', 'Bb', 'C'],
    C_sharp: ['C#', 'Eb', 'E', 'F#', 'Ab', 'A', 'B'],
    D: ['D', 'E', 'F', 'G', 'A', 'Bb', 'C'],
    Eb: ['Eb', 'F', 'F#', 'Ab', 'Bb', 'B', 'C#'],
    E: ['E', 'F#', 'G', 'A', 'B', 'C', 'D'],
    F: ['F', 'G', 'Ab', 'Bb', 'C', 'Db', 'Eb'],
    F_sharp: ['F#', 'Ab', 'A', 'B', 'C#', 'D', 'E'],
    G: ['G', 'A', 'Bb', 'C', 'D', 'Eb', 'F'],
    Ab: ['Ab', 'Bb', 'B', 'C#', 'Eb', 'E', 'F#']
  }
}
