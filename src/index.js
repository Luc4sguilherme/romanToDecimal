/**
 * Takes in a roman numeral string, returns a number integer [1-3999]
 * @param {string} symbols 
 * @return {number}
*/
function romanToDecimal(symbols) {
  const romanNumbers = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  }

  let number = 0

  if(symbols === undefined || symbols.length == 0) {
    throw new Error('Empty argument!')
  }

  symbols = symbols.toUpperCase()

  if(isValidRomanNumber(symbols)) {
    for(let i = 0; i < symbols.length; i++) {
      let current = symbols[i]
      let after = symbols[i + 1]

      if(romanNumbers[after] > romanNumbers[current]) {
        number += romanNumbers[after] - romanNumbers[current]
        i++
      } else {
        number += romanNumbers[current]
      } 
    }
  
    return number
  } else {
    throw new Error('Invalid roman number!')
  }
}

function isValidRomanNumber(symbols) {
  if(/^M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/.test(symbols)) {
    return true
  } 

  return false
}

module.exports = {
  romanToDecimal
}