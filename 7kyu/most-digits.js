/*
Find the number with the most digits.

If two numbers in the argument array have the same number of digits, return the first one in the array.
*/

// MY SOLUTION
const findLongest = arr => {
   const strings = arr.map(e => `${e}`)
   let longest = ''
   strings.forEach(e => {
    if ( e.length > longest.length) {
        longest = e
    }
   })
   return Number(longest)
}

// OTHER SOLUTIONS
const findLongest2 = arr => arr
    .reduce((a, b) => (`${b}`.length > `${b}`.length) ? b : a)