// DESCRIPTION:
// Very simple, given an integer or a floating-point number, find its opposite.

// Examples:

// 1: -1
// 14: -14
// -34: 34

// MY SOLUTION
function opposite(number) {
    //your code here
    if(number < 0) {
      return number - (number * 2);
    }
    else if (number > 0) {
      return number - (number * 2);
    }
    else {
      return 0;
    }
  }


// BETTER SOLUTION 1
const oppositeNumber = (number) => -number;

// BETTER SOLUTION 2

function opposite(number) {
    return(-number);
  }