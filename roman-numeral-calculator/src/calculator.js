//steps: roman numerals to numbers, apply operations, convert numbers back to numerals, figure out how to get user input (either through the web or through the command line) << depending on this, might need to write more functions

//question: do I need to check to see if the numeral is a valid numeral first? I think at first, we'll assume that the numeral is valid

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

const numberToArray = (number) => {
  const numString = number.toString()
  let digitsArray = [];
  let power = numString.length - 1
  for (let i = 0; i < numString.length; i++, power--) {
    let digit = numString[i]
    let powerOfTen = Number(digit) * Math.pow(10, power)
    digitsArray.push({number: powerOfTen, power})
  }
  return digitsArray
}

const numberArrayToNumeral = (numberArray, numberValues, numeralData) => {
  let numeralString = '';
  for (let i = 0; i < numberArray.length; i++) {
    let number = numberArray[i].number
    let numberData = numberArray[i]
    if (numberValues[number]) numeralString += numberValues[number]
    else numeralString += findNumeral(numberData, numeralData)
  }
  return numeralString
}

const numeralData = {
  0: {
    halfValue: 5,
    beforeHalfNumber: 4,
    beforeHalfNumeral: 'IV',
    beforeNextPowerNumeral: 'IX',
    numberValue: 1,
    halfNumeral: 'V',
    singleNumeral: 'I'
  },
  1: {
    halfValue: 50,
    beforeHalfNumber: 40,
    beforeHalfNumeral: 'XL',
    beforeNextPowerNumeral: 'XC',
    numberValue: 10,
    halfNumeral: 'L',
    singleNumeral: 'X'
  },
  2: {
    halfValue: 500,
    beforeHalfNumber: 400,
    beforeHalfNumeral: 'CD',
    beforeNextPowerNumeral: 'CM',
    numberValue: 100,
    halfNumeral: 'D',
    singleNumeral: 'C'
  }
}

const findNumeral = (numberData, valueData) => {
  let number = numberData.number;
  let numeralValue = 0;
  let numeral = ''
  let numeralCount = 0;
  let overHalf = false;
  let originalPower = numberData.power
  let power = valueData[numberData.power]
  while (numeralValue < number) {
    if (originalPower >= 3) {
      numeral += 'M'
      numeralValue += 1000
    }
    else {
      if (numeralValue === power.beforeHalfNumber) {
        numeralValue = power.halfValue
        numeral = power.halfNumeral
      }
      else {
        numeral += power.singleNumeral
        overHalf = numeralValue >= power.halfValue ? true : false
        numeralValue += power.numberValue
        numeralCount++
        if (numeralCount === 4) {
          numeral = overHalf ? power.beforeNextPowerNumeral : power.beforeHalfNumeral
          numeralCount = 0
          numeralValue += power.numberValue
        }
      }
    }
  }
  return numeral
}

const numberToNumeral = (number, numberValues, numeralData) => {
  let numberArray = numberToArray(number)
  return numberArrayToNumeral(numberArray, numberValues, numeralData )
}

//would be good to refactor this into being able to accept an arbitrary number of arguments

const multiply = (arg1, arg2) => {
  return arg1 * arg2
}

const divide = (arg1, arg2) => {
  return arg1 / arg2
}

const add = (arg1, arg2) => {
  return arg1 + arg2
}

const subtract = (arg1, arg2) => {
  return arg1 - arg2
}

const operators = {
  '*': multiply,
  '/': divide,
  '+': add,
  '-': subtract
}

const parseUserInput = (userInput) => {
  const resultArray = userInput.toString().trim().split(' ')
  return resultArray
}

const romanNumeralMath = (operand1, operand2, operator, operators) => {
  let number1 = numeralToNumber(operand1, numeralValues)
  let number2 = numeralToNumber(operand2, numeralValues)

  const numberResult = operators[operator](number1, number2)
  return numberToNumeral(numberResult, numberValues, numeralData)
}


const calculator = () => {
  console.log('Please enter an expression in the following format: VI + VI (include spaces between the numerals')
  process.openStdin().on('data', function(userInput) {
    let [operand1, operator, operand2] = parseUserInput(userInput)
    let result = romanNumeralMath(operand1, operand2, operator, operators)
    if (!result) console.log('Please write a valid expression.')
    process.stdout.write(`result: ${result}\n>`)
  })
}

calculator()
