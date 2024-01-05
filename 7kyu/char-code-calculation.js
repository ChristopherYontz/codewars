/*
Given a string, turn each character into its ASCII character code and join them together to create a number - let's call this number total1:

'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667

Then replace any incidence of the number 7 with the number 1, and call this number 'total2':

total1 = 656667
              ^
total2 = 656661
              ^

Then return the difference between the sum of the digits in total1 and total2:

  (6 + 5 + 6 + 6 + 6 + 7)
- (6 + 5 + 6 + 6 + 6 + 1)
-------------------------
                       6
*/

// MY SOLUTION
function calc (x) {
    // Get array of ACSII nums
    const nums = [...x].map(e => e.charCodeAt(0)).join('')
    // Calculate total
    const total1 = [...nums].map(e => Number(e)).reduce((a, c) => a + c, 0)
    const total2 = [...nums].map(num => num === '7' ? '1' : num).map(e => Number(e)).reduce((a, c) => a + c, 0)
    // Find diff
    return total1 - total2
}

// OTHER SOLUTIONS
function calc(x) {
    // Create arr of string nums and reduce
    const sum = n => [...n].reduce((a, c) => Number(a) + Number(c), 0)
    // Find total by replacing every char in the string with it's ASCII val
    const total1 = x.replace(/./g, x => x.charCodeAt())
    // Replace all 1s with 7s
    const total2 = total1.replace(/7/g, '1')
    // Return the difference
    return sum(total1) - sum(total2)
}