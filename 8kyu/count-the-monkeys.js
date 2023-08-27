/*
You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.

As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.

For example(Input --> Output):

10 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 1 --> [1]
*/

// MY SOLUTION
const monkeyCount = n => new Array(n).fill(0).map((_, i) => i + 1);

// OTHER SOLUTIONS
const monkeyCount2 = n => Array.from({length: n}, (_, i) => i + 1);