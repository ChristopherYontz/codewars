/*
In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.
Example

alphabetPosition("The sunset sets at twelve o' clock.")

Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )
*/

// MY SOLUTION
const alphabetPosition = text => {
    // Convert str to array of only letters
    const textArr = text
        .toLowerCase()
        .split('')
        .filter(char => /[a-z]/.test(char))
    // Declare guide
    const guide = 'abcdefghijklmnopqrstuvwxyz'.split('')
    // Return new str
    return textArr.map(char => guide.indexOf(char) + 1).join(' ')
}

const alphabetPosition2 = text => {
    // Declare guide
    const guide = 'abcdefghijklmnopqrstuvwxyz'.split('')
    // Convert str to array of only letters
    const textArr = text
        .toLowerCase()
        .split('')
        .filter(char => guide.includes(char))
    // Return new str
    return textArr.map(char => guide.indexOf(char) + 1).join(' ')
}