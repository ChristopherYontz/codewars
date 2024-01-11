/*
Write a method that converts a string to camelCase, that is, all words must have their first letter capitalized and spaces must be removed.
Examples (input --> output):

"hello case" --> "HelloCase"
"camel case word" --> "CamelCaseWord"
*/

// MY SOLUTION
String.prototype.camelCase=function(){
    return this
            .split(' ')
            .map(wrd => wrd
                        .split('')
                        .map((char, i) => i === 0 ? char.toUpperCase() : char.toLowerCase())
                        .join('')
                        )
            .join('')
}

// OTHER SOLUTIONS
String.prototype.camelCase=function(){
    return this
            .split(' ')
            .map(wrd => wrd.charAt(0) + wrd.slice(1))
            .join('')
}