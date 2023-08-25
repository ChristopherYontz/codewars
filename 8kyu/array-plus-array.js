/*
I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too.
*/

// MY SOLUTION
const arrayPlusArray = (array1, array2) => array1.reduce((a, c) => a + c) + array2.reduce((a, c) => a + c, 0);

// OTHER SOLUTIONS
const arrayPlusArray2 = (array1, array2) => array1.concat(array2).reduce((a,c) => a + c, 0);