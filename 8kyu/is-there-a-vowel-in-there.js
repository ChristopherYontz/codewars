/*
Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

If they are, change the array value to a string of that vowel.

Return the resulting array.
*/

// MY SOLUTION

const isVow = a => a.map(e =>
    String.fromCharCode(e) === 'a' ||
    String.fromCharCode(e) === 'e' ||
    String.fromCharCode(e) === 'i' ||
    String.fromCharCode(e) === 'o' ||
    String.fromCharCode(e) === 'u' ? String.fromCharCode(e) : e);

// OTHER SOLUTIONS
const isVow2 = a => a.map(e => 'aeiou'.includes(y = String.fromCharCode(e)) ? y : x);

const isVow3 = a => {
    const guide = {
        97: 'a',
        101: 'e',
        105: 'i',
        111: 'o',
        117: 'u', 
    }
    return a.map(e => guide[e] ? guide[e] : e);
}

