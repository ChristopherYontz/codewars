/*
A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
*/

// MY SOLUTION
const isPangram = string => {
    const guide = 'abcdefghijklmnopqrstuvwxyz'
    const stringLetters = Array.from(new Set(string.toLowerCase().split('').filter(char => guide.includes(char)))).sort().join('')
    return guide === stringLetters
}
isPangram(string)

// OTHER SOLUTIONS
const isPangram2 = string => 'abcdefghijklmnopqrstuvwxyz'
    .split('')
    .every(e => string.toLowerCase().includes(e)) // checks to see if every char in the arr meets a particular condition