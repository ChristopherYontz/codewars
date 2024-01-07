/*
Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.
Example 1:

a1 = ["arp", "live", "strong"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns ["arp", "live", "strong"]
Example 2:

a1 = ["tarp", "mice", "bull"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns []
*/

// MY SOLUTION
const inArray = (a1, a2) => a1
    .filter(s1 => a2.some(s2 => s2.includes(s1)))
    .sort()

// OTHER SOLUTIONS
const inArray2 = (arr1, arr2) => arr1
    .filter(a1 => arr2.find(a2 => a2.match(a1)))
    .sort()