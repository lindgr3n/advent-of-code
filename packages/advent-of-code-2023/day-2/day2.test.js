const {
  validateSubset,
  validateGame,
  validGames,
  calculateGamePower,
  calculateAllGamesPowers,
} = require("./day-2");

describe("Day 2", () => {
  it("should be defined", () => {
    expect(validateSubset).toBeDefined();
  });

  it("should validate subset correct", () => {
    const rules = { red: 12, green: 13, blue: 14 };
    expect(validateSubset("3 blue, 4 red", rules)).toBeTruthy();
    expect(validateSubset("1 red, 2 green, 6 blue", rules)).toBeTruthy();
    expect(validateSubset("3 green, 4 blue", rules)).toBeTruthy();
    expect(validateSubset("10 blue", rules)).toBeTruthy();
    expect(validateSubset("20 blue, 4 red", rules)).toBeFalsy();
    expect(validateSubset("3 blue, 40 red", rules)).toBeFalsy();
  });

  it("should validate game correctly", () => {
    const rules = { red: 12, green: 13, blue: 14 };
    expect(
      validateGame("3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green", rules)
    ).toBeTruthy();
    expect(
      validateGame(
        "1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue",
        rules
      )
    ).toBeTruthy();
    expect(
      validateGame(
        "8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red",
        rules
      )
    ).toBeFalsy();
    expect(
      validateGame(
        "1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red",
        rules
      )
    ).toBeFalsy();
    expect(
      validateGame("6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green", rules)
    ).toBeTruthy();
  });

  it("should validate series of games correctly", () => {
    const rules = { red: 12, green: 13, blue: 14 };
    const input = [
      "Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green",
      "Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue",
      "Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red",
      "Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red",
      "Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green",
    ];
    const expected = ["Game 1", "Game 2", "Game 5"];
    expect(validGames(input, rules)).toEqual(expected);
  });

  it("should calculate game power correctly", () => {
    expect(
      calculateGamePower("3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green")
    ).toEqual(48);
    expect(
      calculateGamePower(
        "1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue"
      )
    ).toEqual(12);
    expect(
      calculateGamePower(
        "8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red"
      )
    ).toEqual(1560);
    expect(
      calculateGamePower(
        "1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red"
      )
    ).toEqual(630);
    expect(
      calculateGamePower("6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green")
    ).toEqual(36);
  });

  it("should calculate series of games power correctly", () => {
    const input = [
      "Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green",
      "Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue",
      "Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red",
      "Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red",
      "Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green",
    ];
    const expected = [48, 12, 1560, 630, 36];
    expect(calculateAllGamesPowers(input)).toEqual(expected);
  });
});
