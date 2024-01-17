/*
Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

Your task is to process a string with "#" symbols.
Examples

"abc#d##c"      ==>  "ac"
"abc##d######"  ==>  ""
"#######"       ==>  ""
""              ==>  ""
*/

// MY SOLUTION
const cleanString = s => {
    let result = []
    for (let char of s) {
        if (char === '#') {
            if (result.length > 0) {
                result.pop()
            }
        } else {
            result.push(char)
        }
    }
    return result.join('')
}

// OTHER SOLUTIONS
const cleanString2 = s => s
    .split('')
    .reduce((a, c) => c == '#' ? a.slice(0, -1) : a + c, '')