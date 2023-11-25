/*
Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.
Examples

"312" should return "333122"

"102269" should return "12222666666999999999"
*/

// MY SOLUTION
const explode = str => str
    .split('')
    .map(num => {
        let result = []
        for (let i = 1; i <= Number(num); i++) {
            result.push(num)
        }
        return result.join('')
    } )
    .join('')

// OTHER SOLUTIONS
const explode2 = str => str
    .split
    .map(e => e.repeat(Number(e)))
    .join('')