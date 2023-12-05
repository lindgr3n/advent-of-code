const { readPuzzleInputAsArray } = require("../utils");
const {
  getWinningNumbersAndOurNumbers,
  getWinningNumbers,
  calculateWinningSum,
} = require("./day-4");

// Fetch data input
readPuzzleInputAsArray({
  filename: "day-4/puzzle-input.txt",
  regexp: /(\n|\r)/g,
}).then((data) => {
  const allInput = data.map(getWinningNumbersAndOurNumbers);
  const winningNumbers = allInput.map((e) =>
    getWinningNumbers(e.winningNumbers, e.ourNumbers)
  );
  const sum = winningNumbers.reduce((sum, numbers) => {
    return sum + calculateWinningSum(numbers);
  }, 0);
  console.log("Day-4 Part one answer: ", sum);
  const map = new Map();

  function findOccurance(index) {
    if (index < 0 || index > allInput.length) {
      return;
    }
    let e = allInput[index];
    let occurence = map.get(e.id) ?? 0;
    map.set(e.id, occurence + 1);
    const winningNumbers = getWinningNumbers(e.winningNumbers, e.ourNumbers);
    for (let i = 0; i < winningNumbers.length; i++) {
      findOccurance(e.id + i);
    }
  }

  allInput.forEach((element) => {
    let occurence = map.get(element.id) ?? 0;
    map.set(element.id, occurence + 1);
    const winningNumbers = getWinningNumbers(
      element.winningNumbers,
      element.ourNumbers
    );
    for (let i = 0; i < winningNumbers.length; i++) {
      findOccurance(element.id + i);
    }
  });
  let totalSum = 0;
  map.forEach((v) => {
    totalSum += v;
  });
  console.log("Day-5 Part two answer: ", totalSum);
});
