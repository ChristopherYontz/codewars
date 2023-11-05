/*
Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
Examples:

a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
*/

// MY SOLUTION
function longest (s1, s2) {
    const combined = [...s1].concat([...s2])
    const filtered = []
    for (i = 0; i < combined.length; i ++) {
        if (!filtered.includes(combined[i])) {
            filtered.push(combined[i])
        }
    }
    return filtered.sort().join('')
}

// OTHER SOLUTIONS
const longest = (s1, s2) => [...new Set(s1 + s2)].sort().join('')
    // Sets can only contain distinct (unique) values