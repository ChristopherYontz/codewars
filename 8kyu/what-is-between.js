/*
Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

For example:

a = 1
b = 4
--> [1, 2, 3, 4]
*/

// MY SOLUTION
const between = (a, b) => new Array(1 + b - a).fill(0).map((e, i) => e = (a + i))

// OTHER SOLUTIONS
const between2 = (a, b) => Array.from(new Array(1 + b - a), (_, i) => a + i);

const between3 = (a, b) => [...Array(1 + b - a)].map((_, i) => i + a);
