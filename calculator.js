//steps: roman numerals to numbers, apply operations, convert numbers back to numerals, figure out how to get user input (either through the web or through the command line) << depending on this, might need to write more functions

//question: do I need to check to see if the numeral is a valid numeral first? I think at first, we'll assume that the numeral is valid

//another question: where should I store the numeral values? start as variable

//XXX
//XIX

//loop through the string, find the corresponding value...if the numeral comes before a numeral that is greater than it, subract those values and move two numerals down, if it is equal to or greater than, add the value to the value string, until you reach the end

const numeralValues = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
}

const numeralToNumber = (numeralString, numeralValues) => {
  let numberValue = 0;
  for (let i = 0; i < numeralString.length; i++) {
    let numeral = numeralString[i];
    let nextNumeral = numeralString[i+1]
    console.log('numeral', numeral, 'nextNumeral', nextNumeral, 'i', i)
    if (numeralValues[numeral] >= numeralValues[nextNumeral] || !(numeralValues[nextNumeral])) numberValue += numeralValues[numeral]
    else {
      numberValue += numeralValues[nextNumeral] - numeralValues[numeral]
      i++
    }
  }
  console.log('numberValue', numberValue)
  return numberValue
}

numeralToNumber('IV', numeralValues)
