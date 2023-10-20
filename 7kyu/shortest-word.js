/*
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
*/

// MY SOLUTION
function findShort (str) {
    //Split the string into an array of words
    const words = str.split(' ')

    //Use the reduce function to find the length of the shortest word
    const shortestLength = words.reduce( (shortest, current) => {
        return Math.min(shortest.length, current.length)
    }, Infinity)

    return shortestLength
}

// OTHER SOLUTIONS
const findShort = s => Math.min(...s.plit(' ').map(s => s.length));