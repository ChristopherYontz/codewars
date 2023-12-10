/*
Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

Return as a number.
*/

// MY SOLUTION
const divCon = x => {
    const nonString = x.filter(num => typeof num === 'number').reduce((a, c) => a + c, 0)
    const string = x.filter(num => typeof num === 'string').reduce((a, c) => Number(a) + Number(c), 0)
    return nonString - string
}

// OTHER SOLUTIONS
const divCon2 = x => x
    .reduce((a, c) => typeof c === 'number' ? a + c : a - Number(c), 0)