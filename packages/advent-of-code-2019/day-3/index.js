const { manhattanDistance } = require('./day-3')
const { readPuzzleInput } = require('../utils')

// Fetch data input
readPuzzleInput({ filename: 'day-3/puzzle-input.txt' }).then(data => {
    const [pathOne, pathTwo] = data.split(/\n/g)
    const distance = manhattanDistance({pathOne, pathTwo})
    
    console.log('Day-3 Part one answer: ', distance)  // 207
})