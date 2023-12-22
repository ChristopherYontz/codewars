/*
Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.
Examples

"the-stealth-warrior" gets converted to "theStealthWarrior"

"The_Stealth_Warrior" gets converted to "TheStealthWarrior"

"The_Stealth-Warrior" gets converted to "TheStealthWarrior"
*/

// MY SOLUTION
const toCamelCase = str => {
    // Replace '-' and '_' with the same char
    str = str.split('')
             .map(e => e === '-' || e === '_' ? '.' : e)
             .join('')
    // Return new camelCase str
    return str.split('.')
              .map((e, i, a) => {
                return i === 0 ? e : e.slice(0, 1).toUpperCase() + e.slice(1)
              })
              .join('')
}

// OTHER SOLUTIONS

const toCamelCase2 = str => str
    .split('')
    .map((char, i, a) => {
        if (char === '-' || char === '_' ) {
            a[i + 1] = a[i + 1].toUpperCase() // Capitalize next letter
            return '' // Remove delineator
        }
        return char
    })
    .join('')