/*
Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

Example:

Input:

'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

Output:

'alpha beta gamma delta'
*/

// MY SOLUTION
const removeDuplicateWords = s => {
    const exists = []
    s.split(' ').forEach(e => {
        if (!exists.includes(e)) {
            exists.push(e)
        }
    })
    return exists.join(' ')
}

// OTHER SOLUTIONS
const removeDuplicateWords2 = s => [...new Set(s.split(' '))].join(' ')