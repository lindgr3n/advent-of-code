const { readPuzzleInputAsArray } = require("../utils");
const {
  calculateTotalDistance,
  calculateSimilarityScore
} = require("./day-1");

// Fetch data input
readPuzzleInputAsArray({ filename: "day-1/puzzle-input.txt" }).then((data) => {
  const leftList = [];
  const rightList = [];
  data.forEach(row => {
    const [left, right] = row.trim().split(/\s+/).map(Number);
    leftList.push(left);
    rightList.push(right);
  });

  const totalDistance = calculateTotalDistance(leftList, rightList);
  console.log("Day-1 Part one answer: ", totalDistance);  // 2057374

  const similarityScore = calculateSimilarityScore(leftList, rightList);
  console.log("Day-1 Part two answer: ", similarityScore);  // 23177084
});