const { readPuzzleInputAsArray } = require("../utils");
const { validGames, calculateAllGamesPowers } = require("./day-2");

// Fetch data input
readPuzzleInputAsArray({
  filename: "day-2/puzzle-input.txt",
  regexp: /(\n|\r)/g,
}).then((data) => {
  const rules = { red: 12, green: 13, blue: 14 };

  const allValidGames = validGames(data, rules);
  let sumOfGameIds = 0;
  console.log(allValidGames);
  allValidGames.forEach((game) => {
    const [_, id] = game.split(" ");
    sumOfGameIds += parseInt(id);
  });

  console.log("Day-2 Part one answer: ", sumOfGameIds);

  const gamePowers = calculateAllGamesPowers(data);
  console.log(
    "Day-2 Part two answer: ",
    gamePowers.reduce((sum, power) => (sum += power), 0)
  );
});
