function calculateHandValue(input) {
  if (isFiveOfAKind(input)) {
    return 6;
  } else if (isFourOfAKind(input)) {
    return 5;
  } else if (isFullHouse(input)) {
    return 4;
  } else if (isThreeOfAKind(input)) {
    return 3;
  } else if (isTwoPair(input)) {
    return 2;
  } else if (isOnePair(input)) {
    return 1;
  } else {
    return 0;
  }
}

function rankHandValues(input) {
  // QQQJA > T55J5
  const sorted = input.sort((a, b) => {
    for (let i = 0; i < Math.min(a.length, b.length); i++) {
      let charA = castCardToDigit(a.charAt(i));
      let charB = castCardToDigit(b.charAt(i));

      if (charA < charB) {
        return -1;
      } else if (charA > charB) {
        return 1;
      }
      // If characters are equal, continue to the next character
    }
  });

  return sorted;
}

function castCardToDigit(card) {
  switch (card) {
    case "A":
      return 14;
    case "K":
      return 13;
    case "Q":
      return 12;
    case "J":
      return 11;
    case "T":
      return 10;
    default:
      return parseInt(card);
  }
}

function isFiveOfAKind(input) {
  return /^(.)\1{4}$/.test(input);
}
function isFourOfAKind(input) {
  const characters = input.split("");
  let isFour = characters.filter((c) => c === characters[0]).length === 4;
  if (isFour) {
    return true;
  }
  return characters.filter((c) => c === characters[1]).length === 4;
}
function isFullHouse(input) {
  //
  const map = mapEachCard(input);
  const keys = getMapKeys(map);
  // Count so that we have 2 and 3

  if (map.get(keys[0]) === 3 && map.get(keys[1]) === 2) {
    return true;
  } else if (map.get(keys[0]) === 2 && map.get(keys[1]) === 3) {
    return true;
  }
  return false;
}
function isThreeOfAKind(input) {
  const map = mapEachCard(input);
  const keys = getMapKeys(map);

  return (
    map.get(keys[0]) === 3 || map.get(keys[1]) === 3 || map.get(keys[2] == 3)
  );
}
function isTwoPair(input) {
  const map = mapEachCard(input);
  const keys = getMapKeys(map);

  if (map.get(keys[0]) === 2 && map.get(keys[1]) === 2) {
    return true;
  } else if (map.get(keys[1]) === 2 && map.get(keys[2]) === 2) {
    return true;
  } else if (map.get(keys[0]) === 2 && map.get(keys[2]) === 2) {
    return true;
  }
  return false;
}
function isOnePair(input) {
  const map = mapEachCard(input);
  const keys = getMapKeys(map);

  return (
    map.get(keys[0]) === 2 ||
    map.get(keys[1]) === 2 ||
    map.get(keys[2]) === 2 ||
    map.get(keys[3] === 2)
  );
}

function mapEachCard(input) {
  const characters = input.split("");
  const map = new Map();
  characters.forEach((c) => {
    const occurance = map.get(c);
    if (!occurance) {
      map.set(c, 1);
    } else {
      map.set(c, occurance + 1);
    }
  });
  return map;
}

function getMapKeys(map) {
  let keys = [];
  map.forEach((value, key, map) => keys.push(key));
  return keys;
}

module.exports = {
  rankHandValues,
  calculateHandValue,
  isFiveOfAKind,
  isFourOfAKind,
  isFullHouse,
  isThreeOfAKind,
  isTwoPair,
  isOnePair,
};
