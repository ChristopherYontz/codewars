/*
Given an integer, return a string with dash '-' marks before and after each odd digit, but do not begin or end the string with a dash mark.

Ex:

274 -> '2-7-4'
6815 -> '68-1-5'
*/

// MY SOLUTION

// convert to string
// split string
// map arr
    // check if num is even
        // if num is even, return num
    // check if num is first or last
        // if first and second num is even, return num + dash, otherwise just num
        // if last and second to last is even, return dash + num
    // else return dash + num + dash
// join

// MY SOLUTION
function dashatize(num) {
    let numStr = String(num);

    for (let i of ['1', '3', '5', '7', '9']) {
        numStr = numStr.split(i).join(`-${i}-`);
    }

    return numStr.replace(/--/g, '-').replace(/(^-|-$)/g, '');
}

// Example usage:
console.log(dashatize(274));  // Output: '2-7-4'
console.log(dashatize(-6815)); // Output: '68-1-5'
console.log(dashatize('abc')); // Output: 'None'
