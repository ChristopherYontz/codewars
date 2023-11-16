/*
Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.
*/

// MY SOLUTION
const capitalize = str => {
    let first = []
    let second = []

    str.split('').forEach((e, i) => {
        if (i % 2 === 0) {
            first.push(e.toUpperCase())
            second.push(e.toLowerCase())
        } else {
            first.push(e.toLowerCase())
            second.push(e.toUpperCase())
        }
    })

    return [first.join(''), second.join('')]
}

// OTHER SOLUTIONS
const capitalize2 = str => {
    const even = str.split('')
        .map((e, i) => i % 2 === 0 ? e.toUpperCase() : e)
        .join('')
    const odd = str.split('')
        .map((e, i) => i % 2 !== 0 ? e.toUpperCase() : e)
        .join('')
    return [even, odd]
}