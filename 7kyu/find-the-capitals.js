/*
Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.
Example (Input --> Output)

"CodEWaRs" --> [0,3,4,6]
*/

// MY SOLUTION
const capitals = word => {
    result = []
    word.split('').forEach((letter, index) => {
        if (letter === letter.toUpperCase()) {
            result.push(index)
        }
    })
    return result
}