/*
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
Example

"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice
*/

// MY SOLUTION
const duplicateCount = text => {
    // Convert the string to lowercase to make it case-insensitive
    const lowerText = text.toLowerCase()

    // Use an object to store the count of each character
    const charCount = {}

    // Iterate through each character in the lowercased input string
    for (let char of lowerText) {
        charCount[char] = (charCount[char] || 0) + 1
    }

    // Count the characters that occur more than once
    let duplicateCount = 0
    for (let char in charCount) {
        if (charCount[char] > 1) {
            duplicateCount++
        }
    }
    return duplicateCount
}