/*
Complete the solution so that it takes the object (JavaScript/CoffeeScript) or hash (ruby) passed in and generates a human readable string from its key/value pairs.

The format should be "KEY = VALUE". Each key/value pair should be separated by a comma except for the last pair.

Example:

solution({a: 1, b: '2'}) // should return "a = 1,b = 2"
*/

// MY SOLUTION
const solution = pairs => {
    const arr = []
    for (const key in pairs) {
        arr.push(`${key} = ${pairs[key]}`)
    }
    return arr.join(',')
}

// OTHER SOLUTIONS
const solution2 = pairs =>
  Object.entries(pairs)
    .map(([k,v])=>`${k} = ${v}`)
    .join(',');