const { calculateRequiredFuel, calculateModules } = require("./day-1");
const { readPuzzleInputAsArray } = require('../utils')

// Fetch data input
readPuzzleInputAsArray({ filename: 'day-1/puzzle-input.txt' }).then(data => {

    // Calculate all required fule for the modules
    const totalRequiredFuel = calculateModules({ modules: data })
    console.log(totalRequiredFuel)

})