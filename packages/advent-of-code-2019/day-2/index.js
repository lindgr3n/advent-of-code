const { opCodeCalculator } = require('./day-2')
const { readPuzzleInput } = require('../utils')

// Fetch data input
readPuzzleInput({ filename: 'day-2/puzzle-input.txt' }).then(data => {
    const puzzle = data.split(/,/g).map(value => parseInt(value, 10))
    const puzzlePartOne = [...puzzle];
    // replace position 1 with the value 12
    puzzlePartOne[1] = 12;
    // replace position 2 with the value 2. 
    puzzlePartOne[2] = 2;
    // What value is left at position 0
    const opCode = opCodeCalculator(puzzlePartOne)
    console.log('Day-2 Part one answer: ', opCode[0])

    let answer = { noun: 0, verb: 0 }
    for (let noun = 0; noun <= 99; noun++) {
        for (let verb = 0; verb <= 99; verb++) {
            const tmp = [...puzzle];
            tmp[1] = noun;
            tmp[2] = verb;
            const opCode = opCodeCalculator(tmp)
            if (opCode[0] === 19690720) {
                answer.noun = noun;
                answer.verb = verb;
            }
        }
    }
    // What is 100 * noun + verb
    const sum = 100 * answer.noun + answer.verb
    console.log('Day-2 Part two answer: ', sum);

})