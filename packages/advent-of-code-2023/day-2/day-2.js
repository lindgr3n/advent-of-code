function validateSubset(input, rules) {
  //1 red, 1 blue, 1 green
  const colors = input.split(", ");
  const numbersOfEachColor = { red: 0, blue: 0, green: 0 };
  colors.forEach((value) => {
    let [sum, color] = value.split(" ");
    numbersOfEachColor[color] = parseInt(sum);
  });

  return (
    rules.red >= numbersOfEachColor.red &&
    rules.blue >= numbersOfEachColor.blue &&
    rules.green >= numbersOfEachColor.green
  );
}

function validateGame(input, rules) {
  //3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
  const subSets = input.split("; ");
  return subSets.every((subSet) => validateSubset(subSet, rules));
}

function calculateGamePower(input) {
  const subsets = input.split("; ");
  const numbersOfEachColor = { red: 1, blue: 1, green: 1 };
  subsets.forEach((value) => {
    // 2 blue, 4 red
    const colors = value.split(", ");
    colors.forEach((value) => {
      // 2 blue
      let [sum, color] = value.split(" ");
      if (numbersOfEachColor[color] < sum) {
        numbersOfEachColor[color] = parseInt(sum);
      }
    });
  });
  return (
    numbersOfEachColor.red * numbersOfEachColor.blue * numbersOfEachColor.green
  );
}

function calculateAllGamesPowers(input) {
  const gamePowers = [];
  input.forEach((game) => {
    const [gameId, subSet] = game.split(": ");
    const power = calculateGamePower(subSet);
    gamePowers.push(power);
  });
  return gamePowers;
}

function validGames(input, rules) {
  // ["Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green", "Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue"]
  const validGames = [];
  input.forEach((game) => {
    const [gameId, subSet] = game.split(": ");
    const gameIsValid = validateGame(subSet, rules);
    if (gameIsValid) {
      validGames.push(gameId);
    }
  });
  return validGames;
}
module.exports = {
  validateSubset,
  validateGame,
  validGames,
  calculateGamePower,
  calculateAllGamesPowers,
};
