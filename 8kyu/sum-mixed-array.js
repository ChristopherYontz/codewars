/*
Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.
*/

// MY SOLUTION
const sumMix = x => x.map(item => Number(item)).reduce((a, c) => a + c, 0);