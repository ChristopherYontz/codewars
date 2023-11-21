/*
Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
Example

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

The returned format must be correct in order to complete this challenge.

Don't forget the space after the closing parentheses!
*/

// MY SOLUTION
const createPhoneNumber = nums => {
    const part1 = nums.slice(0, 3).join('')
    const part2 = nums.slice(3, 6).join('')
    const part3 = nums.slice(6).join('')
    return `(${part1}) ${part2}-${part3}`
}

// OTHER SOLUTIONS
const createPhoneNumber2 = nums => {
    let format = '(xxx) xxx-xxxx'
    // Replace the first 'x' in each loop with the current num
    nums.forEach((_, i) => format = format.replace('x', nums[i]))
    return format
}