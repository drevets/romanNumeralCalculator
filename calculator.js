//steps: roman numerals to numbers, apply operations, convert numbers back to numerals, figure out how to get user input (either through the web or through the command line) << depending on this, might need to write more functions

//question: do I need to check to see if the numeral is a valid numeral first? I think at first, we'll assume that the numeral is valid

//another question: where should I store the numeral values? start as variable

//XXX
//XIX

//loop through the string, find the corresponding value...if the numeral comes before a numeral that is greater than it, subract those values and move two numerals down, if it is equal to or greater than, add the value to the value string, until you reach the end

//need to test some more edge cases on my numeral to Number func but want to move on for now...

const numeralValues = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
}

const numberValues = {
  1: 'I',
  5: 'V',
  10: 'X',
  50: 'L',
  100: 'C',
  500: 'D',
  1000: 'M'
}

const numeralToNumber = (numeralString, numeralValues) => {
  let numberValue = 0;
  for (let i = 0; i < numeralString.length; i++) {
    let numeral = numeralString[i];
    let nextNumeral = numeralString[i+1]
    if (numeralValues[numeral] >= numeralValues[nextNumeral] || !(numeralValues[nextNumeral])) numberValue += numeralValues[numeral]
    else {
      numberValue += numeralValues[nextNumeral] - numeralValues[numeral]
      i++
    }
  }
  return numberValue
}

// first, separate out into the respective powers of ten and

const numberToArray = (number) => {
  const numString = number.toString()
  let digitsArray = [];
  let power = numString.length - 1
  for (let i = 0; i < numString.length; i++, power--) {
    let digit = numString[i]
    let powerOfTen = Number(digit) * Math.pow(10, power)
    digitsArray.push({number: powerOfTen, power})
  }
  console.log('digitsArray', digitsArray)
  return digitsArray
}

const numberArrayToNumeral = (numberArray, numberValues) => {
  let numeralString = '';
  for (let i = 0; i < numberArray.length; i++) {
    let number = numberArray[i].number
    if (numberValues[number]) numeralString += numberValues[number]
    else numeralString += findNumeral(numberArray[i])
  }
  return numeralString
}

const findNumeral = (numberData, numberValues) => {
  let number = numberData.number
  let numeralValue = 0;
  let numeral = ''
  if (numberData.power === 0) {
    while (numeralValue < number) {

    }
  }
  if (numberData.power === 1) console.log('tensDigit')
  if (numberData.power === 2) console.log('hundredsDigit')
  if (numberData.power >+ 3) console.log('thousandsDigit++')
}

let numberArray = numberToArray(14)

numberArrayToNumeral(numberArray, numberValues)
