# romanNumeralCalculator
calculate like the Romans do

# how - to 

The web interface for the app is not quite working yet, so to run it, you need to go into the src directory inside of the roman-numeral-calculator react app and run ```node calculator.js```. 

To run the web app skeleton you need to run ```yarn install``` and ```yarn start```. 

# wish list 

In the next versions of the app, I would: 
* Add test suites 
* Allow the calculator to accept arbitrary amounts of arguments instead of just two arguments and an operator 
* Handle poorly formed roman numeral expressions or bad user data (right now the app just crashes) 
* Refactor the numberToNumeral function to remove hard coding // something feels "wrong" about how I've used the data object to store that information; with some digging, could probably find a more elegant path
* Handle edge cases (i.e. very large numbers and 0) 

# other notes 

I left some of my notes in the code and will attach a Google doc where I also left some notes just to give you a sense of my thinking. 
