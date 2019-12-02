const { opCodeCalculator } = require('./day-2')
const { readPuzzleInput } = require('../utils')

// Fetch data input
readPuzzleInput({ filename: 'day-2/puzzle-input.txt' }).then(data => {
    const puzzle = data.split(/,/g).map(value => parseInt(value, 10))
    // replace position 1 with the value 12
    puzzle[1] = 12;
    // replace position 2 with the value 2. 
    puzzle[2] = 2;
    // What value is left at position 0
    const opCode = opCodeCalculator(puzzle)
    console.log('Day-2 Part one answer: ', opCode[0])
})