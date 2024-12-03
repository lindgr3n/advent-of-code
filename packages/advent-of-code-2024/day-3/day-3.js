function extractMulInstructions(input) {
  const regex = /mul\((\d+),(\d+)\)/g;
  let match;
  const instructions = [];

  while ((match = regex.exec(input)) !== null) {
    const x = parseInt(match[1], 10);
    const y = parseInt(match[2], 10);
    instructions.push(x * y);
  }

  return instructions;
}

function sumMulInstructions(input) {
  const instructions = extractMulInstructions(input);
  return instructions.reduce((sum, value) => sum + value, 0);
}

function extractMulInstructionsWithConditions(input) {
  const mulRegex = /mul\((\d+),(\d+)\)/g;
  const doRegex = /do\(\)/g;
  const dontRegex = /don't\(\)/g;
  let match;
  let enabled = true;
  const instructions = [];

  let lastIndex = 0;
  while ((match = mulRegex.exec(input)) !== null) {
    const x = parseInt(match[1], 10);
    const y = parseInt(match[2], 10);
    const subInput = input.slice(lastIndex, match.index);

    if (doRegex.test(subInput)) {
      enabled = true;
    }
    if (dontRegex.test(subInput)) {
      enabled = false;
    }

    if (enabled) {
      instructions.push(x * y);
    }

    lastIndex = match.index + match[0].length;
  }

  return instructions;
}

module.exports = { extractMulInstructions, sumMulInstructions, extractMulInstructionsWithConditions };