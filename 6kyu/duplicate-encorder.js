/*
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
Examples

"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
*/

// MY SOLUTION
const duplicateEncode = word => {
    // Turn word into array
    const wordArr = word.toLowerCase().split('')
    // Get unique chars
    let charsSet = new Set(word.toLowerCase())
    // Convert set to arr
    let charsArr = Array.from(charsSet)
    // Create guide obj
    let guide = {}
    charsArr.forEach(char => {
        // Count occurances of each char in the word
        let count = wordArr.filter(e => e === char).length
        guide[char] = count
    })
    // Return new string
    return wordArr.map(e => guide[e] > 1 ? ')' : '(').join('')
}

// OTHER SOLUTIONS
const duplicateEncode2 = word => word
    .toLowerCase()
    .split('')
    .map((a, _, w ) => {
        return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
    })
    .join('')