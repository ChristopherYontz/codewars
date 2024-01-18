/*
Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings. Consonants are any letters of the alphabet except "aeiou".

We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.

For example, for the word "zodiacs", let's cross out the vowels. We get: "z o d ia cs"

-- The consonant substrings are: "z", "d" and "cs" and the values are z = 26, d = 4 and cs = 3 + 19 = 22. The highest is 26.
solve("zodiacs") = 26

For the word "strength", solve("strength") = 57
-- The consonant substrings are: "str" and "ngth" with values "str" = 19 + 20 + 18 = 57 and "ngth" = 14 + 7 + 20 + 8 = 49. The highest is 57.
*/

// MY SOLUTION
const solve = s => {
    const vowels = 'aeiou'
    const guide = 'abcdefghijklmnopqrstuvwxyz'
    
    let substrings = [s]
    vowels.split('').forEach(char => {
        substrings = substrings.flatMap(substr => substr.split(char))
        console.log(substrings)
    })

    let total = 0
    substrings.forEach(str => {
        let sum = 0
        str.split('').forEach(char => sum += guide.indexOf(char) + 1)

        if (sum > total) {
            total = sum
        }
    })

    return total
}

console.log(solve2('zodiac'))