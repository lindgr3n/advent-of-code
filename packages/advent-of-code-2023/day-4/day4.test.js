const {
  getWinningNumbers,
  calculateWinningSum,
  getWinningNumbersAndOurNumbers,
} = require("./day-4");

describe("Day 4", () => {
  it("should be defined", () => {
    expect(getWinningNumbers).toBeDefined();
  });

  it("should return correct winning numbers", () => {
    expect(
      getWinningNumbers([41, 48, 83, 86, 17], [83, 86, 6, 31, 17, 9, 48, 53])
    ).toEqual([48, 83, 86, 17]);
    expect(
      getWinningNumbers([13, 32, 20, 16, 61], [61, 30, 68, 82, 17, 32, 24, 19])
    ).toEqual([32, 61]);
    expect(
      getWinningNumbers([87, 83, 26, 28, 32], [88, 30, 70, 12, 93, 22, 82, 36])
    ).toEqual([]);
    expect(
      getWinningNumbers(
        [36, 81, 27, 87, 25, 94, 13, 59, 45, 64],
        [
          68, 19, 95, 12, 27, 45, 70, 16, 42, 80, 36, 87, 64, 78, 63, 21, 81,
          35, 57, 25, 54, 59, 94, 52, 38,
        ]
      )
    ).toEqual([36, 81, 27, 87, 25, 94, 59, 45, 64]);
  });

  it("should calculate winning sum correctly", () => {
    expect(calculateWinningSum([48, 83, 86, 17, 1, 2])).toEqual(32);
    expect(calculateWinningSum([48, 83, 86, 17, 1])).toEqual(16);
    expect(calculateWinningSum([48, 83, 86, 17])).toEqual(8);
    expect(calculateWinningSum([1, 21])).toEqual(2);
    expect(calculateWinningSum([84])).toEqual(1);
    expect(calculateWinningSum([])).toEqual(0);
  });

  it("should get correct numbers from line", () => {
    expect(
      getWinningNumbersAndOurNumbers(
        "Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53"
      )
    ).toEqual({
      id: 1,
      winningNumbers: [41, 48, 83, 86, 17],
      ourNumbers: [83, 86, 6, 31, 17, 9, 48, 53],
    });
    expect(
      getWinningNumbersAndOurNumbers(
        "Card   7: 36 81 27 87 25 94 13 59 45 64 | 68 19 95 12 27 45 70 16 42 80 36 87 64 78 63 21 81 35 57 25 54 59 94 52 38"
      )
    ).toEqual({
      id: 7,
      winningNumbers: [36, 81, 27, 87, 25, 94, 13, 59, 45, 64],
      ourNumbers: [
        68, 19, 95, 12, 27, 45, 70, 16, 42, 80, 36, 87, 64, 78, 63, 21, 81, 35,
        57, 25, 54, 59, 94, 52, 38,
      ],
    });
  });

  it("should ", () => {
    const numbers = getWinningNumbersAndOurNumbers(
      "Card   7: 36 81 27 87 25 94 13 59 45 64 | 68 19 95 12 27 45 70 16 42 80 36 87 64 78 63 21 81 35 57 25 54 59 94 52 38"
    );
    const winningNumbers = getWinningNumbers(
      numbers.winningNumbers,
      numbers.ourNumbers
    );
    expect(calculateWinningSum(winningNumbers)).toEqual(256);
  });
});
