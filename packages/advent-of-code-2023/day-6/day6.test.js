const { isRaceIsAWin, getDifferentWaysToWin } = require("./day-6");

describe("Day 6", () => {
  it("should be defined", () => {
    expect(isRaceIsAWin).toBeDefined();
  });

  it("should calculate if race is a win correctly", () => {
    expect(isRaceIsAWin(0, 7, 9)).toBeFalsy(); // 0mm
    expect(isRaceIsAWin(1, 7, 9)).toBeFalsy(); // 6mm
    expect(isRaceIsAWin(2, 7, 9)).toBeTruthy(); // 10mm
    expect(isRaceIsAWin(3, 7, 9)).toBeTruthy(); // 12mm
    expect(isRaceIsAWin(4, 7, 9)).toBeTruthy(); // 12mm
    expect(isRaceIsAWin(5, 7, 9)).toBeTruthy(); // 10mm
    expect(isRaceIsAWin(6, 7, 9)).toBeFalsy(); // 6mm
    expect(isRaceIsAWin(7, 7, 9)).toBeFalsy(); // 0mm
  });

  it("should calculate correct winning races", () => {
    expect(getDifferentWaysToWin(7, 9)).toEqual([2, 3, 4, 5]);
    expect(getDifferentWaysToWin(15, 40)).toEqual([4, 5, 6, 7, 8, 9, 10, 11]);
    expect(getDifferentWaysToWin(30, 200)).toEqual([
      11, 12, 13, 14, 15, 16, 17, 18, 19,
    ]);
  });
});
