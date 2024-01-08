/*
You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
*/

// MY SOLUTION
const expandedForm = num => {
    if (num.length < 2) {
        return num
    }
    
    let result = []
    String(num).split('').reverse().forEach((n, i) => {
        if(n != 0) {
            result.push(`${n}${'0'.repeat(i)}`)
        }
    })

    return result.reverse().join(' + ')
}

// OTHER SOLUTIONS
const expandedForm2 = n => n
    .toString()
    .split('')
    .reverse()
    .map((n, i) => n * Math.pow(10, i))
    .filter(n => n > 0)
    .reverse()
    .join(' + ')

const expandedForm3 = num => num
    .toString()
    .split('')
    .map((n, i, a) => n + '0'.repeat(a.length - i - 1))
    .filter(n => Number(n) != 0)
    .join(' + ')