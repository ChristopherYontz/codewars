/*
Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

Examples
"hello"     -->  "hll"
"codewars"  -->  "cdwrs"
"goodbye"   -->  "gdby"
"HELLO"     -->  "HELLO"
don't worry about uppercase vowels
y is not considered a vowel for this kata
*/

// MY SOLUTION
const shortcut = string => string.split('').filter(e => !/[aeiou]/g.test(e)).join('');

// OTHER SOLUTIONS
const shortcut2 = string => string.replace(/[aeiou]/g, '');