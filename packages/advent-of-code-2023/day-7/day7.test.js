const {
  isFiveOfAKind,
  isFourOfAKind,
  isFullHouse,
  isThreeOfAKind,
  isTwoPair,
  isOnePair,
  calculateHandValue,
  rankHandValues,
} = require("./day-7");

describe("Day 7", () => {
  it("should be defined", () => {
    expect(isFiveOfAKind).toBeDefined();
    expect(isFourOfAKind).toBeDefined();
    expect(isFullHouse).toBeDefined();
    expect(isThreeOfAKind).toBeDefined();
    expect(isTwoPair).toBeDefined();
    expect(isOnePair).toBeDefined();
  });

  it("should verify five of a kind", () => {
    expect(isFiveOfAKind("AAAAA")).toBeTruthy();
    expect(isFiveOfAKind("11111")).toBeTruthy();
    expect(isFiveOfAKind("AAAAT")).toBeFalsy();
    expect(isFiveOfAKind("12345")).toBeFalsy();
  });

  it("should verify four of a kind", () => {
    expect(isFourOfAKind("AAAAT")).toBeTruthy();
    expect(isFourOfAKind("TAAAA")).toBeTruthy();
    expect(isFourOfAKind("11211")).toBeTruthy();
    expect(isFourOfAKind("TT111")).toBeFalsy();
    expect(isFourOfAKind("11T1T")).toBeFalsy();
  });

  it("should verify full house", () => {
    expect(isFullHouse("AAATT")).toBeTruthy();
    expect(isFullHouse("TAATA")).toBeTruthy();
    expect(isFullHouse("12121")).toBeTruthy();
    expect(isFullHouse("AAAAT")).toBeFalsy();
    expect(isFullHouse("12123")).toBeFalsy();
  });

  it("should verify three of a kind", () => {
    expect(isThreeOfAKind("AAA1T")).toBeTruthy();
    expect(isThreeOfAKind("TAA2A")).toBeTruthy();
    expect(isThreeOfAKind("12151")).toBeTruthy();
    expect(isThreeOfAKind("12AAT")).toBeFalsy();
    expect(isThreeOfAKind("12123")).toBeFalsy();
  });

  it("should verify two pair", () => {
    expect(isTwoPair("AA1TT")).toBeTruthy();
    expect(isTwoPair("TAA22")).toBeTruthy();
    expect(isTwoPair("12155")).toBeTruthy();
    expect(isTwoPair("12AAT")).toBeFalsy();
    expect(isTwoPair("12134")).toBeFalsy();
  });
  it("should verify one pair", () => {
    expect(isOnePair("AA12T")).toBeTruthy();
    expect(isOnePair("TAA23")).toBeTruthy();
    expect(isOnePair("12155")).toBeTruthy();
    expect(isOnePair("12ATJ")).toBeFalsy();
    expect(isOnePair("12345")).toBeFalsy();
  });

  it("should calculate hand value", () => {
    expect(calculateHandValue("AAAAA")).toEqual(6);
    expect(calculateHandValue("AAAAT")).toEqual(5);
    expect(calculateHandValue("AAATT")).toEqual(4);
    expect(calculateHandValue("AAA12")).toEqual(3);
    expect(calculateHandValue("AA1TT")).toEqual(2);
    expect(calculateHandValue("AA123")).toEqual(1);
    expect(calculateHandValue("12345")).toEqual(0);
  });

  it("should rank hand values", () => {
    expect(rankHandValues(["12345", "23456"])).toEqual(["12345", "23456"]);
    expect(rankHandValues(["A1234", "12345"])).toEqual(["12345", "A1234"]);
    expect(rankHandValues(["444AA", "KKKJJ", "AAAAA"])).toEqual([
      "444AA",
      "KKKJJ",
      "AAAAA",
    ]);
  });
});
