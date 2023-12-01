function filterOutNumbers(input) {
  return input.map((i) => i.split("").filter((n) => !isNaN(n)));
}

function calculateSumWithWordsAndNumbers(input) {
  return input.reduce((sum, current) => {
    const first = matchingNumber(current);
    const last = matchingNumberReverse(current);
    return (sum += parseInt(first + "" + last));
  }, 0);
}

function matchingNumber(input) {
  // Ugliest thing ever :D
  let arr = input.split("");
  let currentWord = "";
  let res = "";
  for (let i = 0; i < arr.length; i++) {
    currentWord += arr[i];
    switch (currentWord) {
      case "nine":
      case "9":
        res = 9;
        break;
      case "eight":
      case "8":
        res = 8;
        break;
      case "seven":
      case "7":
        res = 7;
        break;
      case "six":
      case "6":
        res = 6;
        break;
      case "five":
      case "5":
        res = 5;
        break;
      case "four":
      case "4":
        res = 4;
        break;
      case "three":
      case "3":
        res = 3;
        break;
      case "two":
      case "2":
        res = 2;
        break;
      case "one":
      case "1":
        res = 1;
        break;
    }
  }
  if (!res) {
    // Start over
    return matchingNumber(input.substring(1));
  }
  return res;
}

function matchingNumberReverse(input) {
  let arr = input.split("").reverse();
  let currentWord = "";
  let res = "";
  for (let i = 0; i < arr.length; i++) {
    currentWord += arr[i];
    switch (currentWord) {
      case "enin":
      case "9":
        res = 9;
        break;
      case "thgie":
      case "8":
        res = 8;
        break;
      case "neves":
      case "7":
        res = 7;
        break;
      case "xis":
      case "6":
        res = 6;
        break;
      case "evif":
      case "5":
        res = 5;
        break;
      case "ruof":
      case "4":
        res = 4;
        break;
      case "eerht":
      case "3":
        res = 3;
        break;
      case "owt":
      case "2":
        res = 2;
        break;
      case "eno":
      case "1":
        res = 1;
        break;
    }
  }
  if (!res) {
    // Start over
    return matchingNumberReverse(input.substring(0, input.length - 1));
  }
  return res;
}

function replaceStringsWithNumbers(inputString) {
  let arr = [];
  arr.push(...wordMatch(inputString, "nine").map((e) => 9));
  arr.push(...wordMatch(inputString, "eight").map((e) => 8));
  arr.push(...wordMatch(inputString, "seven").map((e) => 7));
  arr.push(...wordMatch(inputString, "six").map((e) => 6));
  arr.push(...wordMatch(inputString, "five").map((e) => 5));
  arr.push(...wordMatch(inputString, "four").map((e) => 4));
  arr.push(...wordMatch(inputString, "three").map((e) => 3));
  arr.push(...wordMatch(inputString, "two").map((e) => 2));
  arr.push(...wordMatch(inputString, "one").map((e) => 1));

  //var res = arr.filter((e) => (e.length > 0 ? e : 0));
  var resNumbers = filterOutNumbers([inputString]);
  arr = arr.concat(...resNumbers);
  //console.log("ARR+res", arr.join(""));
  return arr.join("");
}

function wordMatch(inputString, word) {
  const pattern = new RegExp(word, "g");
  const matches = inputString.match(pattern);
  //console.log("MATCH", matches);
  return matches ? matches : [];
}

function replaceWordWithNumber(input) {
  return input.map(replaceStringsWithNumbers);
}

function calculateSum(input) {
  return input
    .map((e) => e[0] + e[e.length - 1])
    .reduce((sum, i) => sum + parseInt(i), 0);
}

module.exports = {
  filterOutNumbers,
  calculateSum,
  replaceWordWithNumber,
  matchingNumber,
  matchingNumberReverse,
  calculateSumWithWordsAndNumbers,
};
