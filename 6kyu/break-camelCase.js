/*
Complete the solution so that the function will break up camel casing, using a space between words.
Example

"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
*/

// MY SOLUTION
function solution (str) {
    const guide = [...str.toLowerCase()]
    let arr = str.split('')

    for (let i = str.length - 1; i >= 0; i--) {
        if (arr[i] !== guide[i]) {
            arr.splice(i, 0, ' ')
        }
    }

    return arr.join('')
}

// OTHER SOLUTIONS
const solution2 = string => [...string]
.map(char => {
    return (char === char.toUpperCase()) ? ` ${char}` : char
})
.join('')
console.log(solution2('camelCasingTest'))