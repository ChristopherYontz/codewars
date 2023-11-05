/*
Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

The binary number returned should be a string.

Examples:(Input1, Input2 --> Output (explanation)))

1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)
*/

// MY SOLUTION
function addBinary (a, b) {
    let sum = a + b
    const biNums = []
    while (sum > 0) {
        biNums.push((sum % 2).toString())
         sum = Math.floor(sum / 2)
    }
    return biNums.join('')
}

function addBinary (a, b) {
    let sum = a + b
    const biNums = []
    for (; sum > 0; sum = Math.floor(sum / 2)) {
        biNums.push((sum % 2).toString())
    }
    return biNums.reverse().join('')
}

// OTHER SOLUTIONS
const addBinary = (a, b) => (a + b).toString(2);
    // toString(2) converts a number to binary