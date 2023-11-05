/*
Write a function to get the first element(s) of a sequence. Passing a parameter n (default=1) will return the first n element(s) of the sequence.

If n == 0 return an empty sequence []
Examples

var arr = ['a', 'b', 'c', 'd', 'e'];
first(arr) //=> ['a'];
first(arr, 2) //=> ['a', 'b']
first(arr, 3) //=> ['a', 'b', 'c'];
first(arr, 0) //=> [];
*/

// MY SOLUTION
const first = (arr, n) =>
    n === 0 ? [] :
    n ? arr.filter((_, i) => i < n) : [arr[0]];

// OTHER SOLUTIONS
const first2 = (arr, n = 1) => arr.slice(0, n);
    // n defaults to 1
    // slice works by taking n number of elements starting at arr[0]