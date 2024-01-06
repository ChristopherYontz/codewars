/*
The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.
*/

// MY SOLUTION
function count(string) {
    const guide = {}
    string.split('')
          .forEach(e => Object.keys(guide).includes(e) ? guide[e]++ : guide[e] = 1)
    return guide
}

// OTHER SOLUTIONS
function count2(string) {
    const guide = {}
    string.split('')
          .forEach(e => guide[e] ? guide[e]++ : guide[e] = 1)
    return guide
}