const { readPuzzleInput } = require("../utils");
const { sumMulInstructions, extractMulInstructionsWithConditions } = require("./day-3");

// Fetch data input
readPuzzleInput({ filename: "day-3/puzzle-input.txt" }).then((data) => {
  const resultPartOne = sumMulInstructions(data);
  console.log("Day-3 part one answer: ", resultPartOne);  // 180233229

  const instructionsPartTwo = extractMulInstructionsWithConditions(data);
  const resultPartTwo = instructionsPartTwo.reduce((sum, value) => sum + value, 0);
  console.log("Day-3 part two answer: ", resultPartTwo);  // 95411583
});