const { readPuzzleInputAsArray } = require("../utils");
const { calculateHandValue, rankHandValues } = require("./day-7");

// Fetch data input
readPuzzleInputAsArray({
  filename: "day-7/puzzle-input.txt",
  regexp: /(\n|\r)/g,
}).then((data) => {
  const cardsAndBet = data.map((input) => {
    const [cards, bet] = input.split(" ");
    const value = calculateHandValue(cards);
    return { cards, bet, value };
  });

  const sorted = cardsAndBet.sort((a, b) => {
    if (a.value === b.value) {
      const subRank = rankHandValues([a.cards, b.cards]);
      const rankComparison = subRank.reduce(
        (result, order, index) => result || order.value - subRank[index].value,
        0
      );
      console.log("SUBRANK", rankComparison);
      return subRank;
    }
    return a.value - b.value;
  });

  const result = sorted.map((cardsAndBet) => {
    //
    return cardsAndBet;
  });

  console.log("Day-7 Part one answer: ", result);

  //console.log("Day-7 Part two answer: ", res.length);
});
