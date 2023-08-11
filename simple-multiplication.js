// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

// MY SOLUTION
const simpleMultiplication = number => number % 2 === 0 ? number * 8 : number * 9;

// OTHER SOLUTIONS
const simpleMultiplication2 = n => n * (n % 2 ? 9 : 8); // 0 = false