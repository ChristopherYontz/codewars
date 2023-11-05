/*
Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false
*/

// MY SOLUTION
const solution = (str, ending) => {
    const end = [...ending].reverse().join('')
    const keyLetters = [...str].reverse().slice(0, end.length).join('')

    return end == keyLetters
};

// OTHER SOLUTIONS
const solution2 = (str, ending) => str.endsWith(ending);