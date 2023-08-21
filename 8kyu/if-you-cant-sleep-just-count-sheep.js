/*
If you can't sleep, just count sheep!!

Task:
*Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.
*/

// MY SOLUTION
const countSheep = num => Array(num).fill(0).map((e, i) => `${i + 1} sheep...`).join('');

// OTHER SOLUTIONS
countSheep=n=>[...Array(n).keys()].map(x=>`${x+1} sheep...`).join``