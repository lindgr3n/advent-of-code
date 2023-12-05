function getWinningNumbers(winningNumbers, ourNumbers) {
  var result = [];
  winningNumbers.forEach((number) => {
    if (ourNumbers.includes(number)) {
      result.push(number);
    }
  });
  return result;
}

function calculateWinningSum(input) {
  if (input.length == 0) {
    return 0;
  }
  if (input.length == 1) {
    return 1;
  }
  if (input.length == 2) {
    return 2;
  }

  return Math.pow(2, input.length - 1);
}

function getWinningNumbersAndOurNumbers(input) {
  //Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53
  const [idTag, numbers] = input.split(": ");
  const [winningNumbers, ourNumbers] = numbers.split(" | ");
  const str = idTag.split(" ");
  return {
    id: parseInt(str[str.length - 1]),
    winningNumbers: winningNumbers
      .split(" ")
      .filter(removeEmptyNumbers)
      .map((e) => parseInt(e)),
    ourNumbers: ourNumbers
      .split(" ")
      .filter(removeEmptyNumbers)
      .map((e) => parseInt(e)),
  };
}

function removeEmptyNumbers(number) {
  return !!number;
}

module.exports = {
  getWinningNumbers,
  calculateWinningSum,
  getWinningNumbersAndOurNumbers,
};
