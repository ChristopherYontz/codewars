/*
This time no story, no theory. The examples below show you how to write function accum:
Examples:

accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"

The parameter of accum is a string which includes only letters from a..z and A..Z.
*/

// MY SOLUTION
function accum (s) {
    let result = []
    for (let i = 0; i < s.length; i++) {
        let repeatedPart = s[i].repeat(i + 1)
        let capitalizedPart = repeatedPart[0].toUpperCase() + repeatedPart.slice(1).toLowerCase()
        
        result.push(capitalizedPart)
    }
    return result.join('-')
}

// OTHER SOLUTIONS
const accum = s => s
    .split('')
    .map((e, i) => e.toUpperCase() + e.toLowerCase().repeat(i))
    .join('-')