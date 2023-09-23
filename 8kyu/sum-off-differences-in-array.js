/*
Your task is to sum the differences between consecutive pairs in the array in descending order.
Example

[2, 1, 10]  -->  9

In descending order: [10, 2, 1]

Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell, None in Rust).
*/

// MY SOLUTION

// Not sure why this first one doesn't work, but the second one does
let arr = [1, 2, 10]
const sumOfDifferences = arr => {
    if(arr.length <= 1) {
        return 0
    }

    let sorted = arr.sort((a, b) => b - a)
    let diffs = sorted.map((e, i) => e - sorted[i + 1])
    return diffs.reduce((a, c) => a + c, 0)
}

const sumOfDifferences2 = arr => arr
    .sort((a, b) => b - a)
    .map((e, i) => e - arr[i + 1])
    .reduce((a, c) => a + c, 0);

const sumOfDifferences3 = arr => {
    if(arr.length <= 1) {
        return 0
    }

    let sorted = arr.sort((a, b) => b - a)
    let sum = 0;

    for(let i = 0; i < sorted.length - 1; i++) {
        sum += arr[i] - arr[i + 1]
    }
    return sum
}

// OTHER SOLUTIONS
// I don't get how this one works either
const sumOfDifferences4 = arr => arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;