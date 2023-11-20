/*
Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

Example:

"riley" --> "Hello Riley!"
"JACK"  --> "Hello Jack!"
*/

// MY SOLUTION
const greet = name => {
    const firstLetter = name.slice(0, 1).toUpperCase()
    const rest = name.slice(1).toLowerCase()
    return `Hello ${firstLetter.concat(rest)}!`
}

// OTHER SOLUTIONS
const greet2 = name =>
    `Hello ${name.charAt(0).toUpperCase()}${name.slice(1).toLowerCase()}!`