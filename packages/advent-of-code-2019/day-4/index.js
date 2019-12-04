const {calculatePassword, gotUniqueDoubleDigits} = require('./day-4')

const passwords = calculatePassword({range: {max: 612564, min: 146810}})
console.log('Day 4 part one answer: ', passwords.length); // 1748

const uniqueDoubleDigitPasswords = passwords.filter(gotUniqueDoubleDigits)
console.log('Day 4 part two answer: ', uniqueDoubleDigitPasswords.length); // 1180
