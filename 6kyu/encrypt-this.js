/*
You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

    Your message is a string containing space separated words.
    You need to encrypt each word in the message using the following rules:
        The first letter must be converted to its ASCII code.
        The second letter must be switched with the last letter
    Keepin' it simple: There are no special characters in the input.

Examples:

encryptThis("Hello") === "72olle"
encryptThis("good") === "103doo"
encryptThis("hello world") === "104olle 119drlo"
*/

// MY SOLUTION
const encryptThis = text => text
    .split(' ')
    .map(wrd => {
            const chars = wrd.split('')
            const first = wrd.charCodeAt(0)
            const second = chars[1]
            const last = chars[chars.length - 1]
            return chars.map((char, i) => {
                return i === 0 ? first :
                       i === 1 ? last :
                       i === chars.length - 1 ? second :
                       char
            })
            .join('')
    })
    .join(' ')