/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

isIsogram "Dermatoglyphics" = true
isIsogram "moose" = false
isIsogram "aba" = false
*/

// MY SOLUTION
const isIsogram = str => {
    str = str.toLowerCase()
    let charMap = {}
    for (let char of str) {
        if (charMap[char]) {
            return false
        }
        charMap[char] = true
    }
    return true
}

// OTHER SOLUTIONS
const isIsogram2 = str => new Set(str.toUpperCase()).size == str.length
    // new Set creates new obj with ONLY unique values (i.e. no repeats)
    // .size provides the number of elements in the Set object
    // if there are less elements than str.length, there are repeats in the str