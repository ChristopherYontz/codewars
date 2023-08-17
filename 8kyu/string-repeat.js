// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

// Examples (input -> output)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"



// MY SOLUTION
function repeatStr(number, string) {
    let repeatedString = '';
    for(let i = 1; i <= number; i++) {
        repeatedString += string; 
    }
    return repeatedString;
}

repeatStr(20, 'leedle');

// OTHER SOLUTIONS
const repeatStr = (number, string) => string.repeat(number);