function calculatePassword({length, range: {max, min}} = {}) {
  
  // Start at the lowest range
  // increase by one
  let validPasswords = [];
  for (let index = min; index <= max; index++) {
    // Verify that it have double digits
    // Verify that it have increasing digits
    if(gotDoubleDigits(index) && gotIncreasingNumbers(index)) {
      validPasswords.push(index)
    }
  }  
  return validPasswords;
}

function gotDoubleDigits(input) {
  if(!input) {
    return false
  }

  let valid = false;
  const numbers = input.toString().split('').map(Number)
  for (let index = 0; index < numbers.length-1; index++) {
    const current = numbers[index];
    const second = numbers[index+1];
    if(second === current) {
      valid = true;
      break;
    }
  }
  return valid;

}

function gotIncreasingNumbers(input) {
  if(!input) {
    return false
  }

  let valid = true;
  const numbers = input.toString().split('').map(Number)
  for (let index = 0; index < numbers.length-1; index++) {
    const current = numbers[index];
    const second = numbers[index+1];
    if(second < current) {
      valid = false;
      break;
    }
  }
  return valid;
}

function gotUniqueDoubleDigits(input) {
  if(!input) {
    return false
  }  
  
  let doubleDigits = []
  let sequenceOfDigits = [];
  const numbers = input.toString().split('').map(Number)  
  for (let index = 0; index < numbers.length-2; index++) {
    const current = numbers[index];
    const second = numbers[index+1];
    const third = numbers[index+2];
    
    // Check if tre following exist
    if(third === second && third === current) {
      // Ceck if it already exist
      if(!sequenceOfDigits.includes(current + '' + second)) {       
        // Verify that we have not stored a non valid combination
        const index = doubleDigits.indexOf(current + '' + second)
        if(index !== -1) {
          doubleDigits = [...doubleDigits.slice(0, index), ...doubleDigits.slice(index + 1)]
        }
        sequenceOfDigits.push(current + '' + second)
      }
    } else {
      if(current === second) {
        // Only allow if it not exist as a triple
        if(!sequenceOfDigits.includes(current + '' + second)) {
          doubleDigits.push(current + '' + second)
        }
      } else {
        if(second === third) {
          // Only allow if it not exist as a triple
          if(!sequenceOfDigits.includes(second + '' + third)) {
            doubleDigits.push(second + '' + third)
          }
        }
      }
    }
  }

  if(doubleDigits.length > 0) {
    return true;
  }
  return false;
}

module.exports = {calculatePassword, gotDoubleDigits, gotIncreasingNumbers, gotUniqueDoubleDigits}