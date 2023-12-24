/*
Write a function, nicknameGenerator that takes a string name as an argument and returns the first 3 or 4 letters as a nickname.

If the 3rd letter is a consonant, return the first 3 letters.

nickname("Robert") //=> "Rob"
nickname("Kimberly") //=> "Kim"
nickname("Samantha") //=> "Sam"

If the 3rd letter is a vowel, return the first 4 letters.

nickname("Jeannie") //=> "Jean"
nickname("Douglas") //=> "Doug"
nickname("Gregory") //=> "Greg"

If the string is less than 4 characters, return "Error: Name too short".
*/

// MY SOLUTION
const nicknameGenerator = name => {
    const vowels = 'aeiou'
    if(name.length < 4) {return 'Error: Name too short'}
    return vowels.includes(name[2]) ? name.slice(0, 4) : name.slice(0, 3)
}

// Other Solutions
const nicknameGenerator2 = name => name.length > 3
    // if char is included, expression equals 4, else 3
    ? name.slice(0, 3 + 'aeiou'.includes(name[2]))
    : 'Error: Name too short'