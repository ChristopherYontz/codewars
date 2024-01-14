/*
Definition

A Tidy number is a number whose digits are in non-decreasing order.
Task

Given a number, Find if it is Tidy or not . 
*/

// MY SOLUTION
const tidyNumber = n => {
    if (String(n).length < 2) {
        return true
    }

    const num = Number(String(n).split('').sort((a, b) => Number(a) - Number(b)).join(''))
    
    return num === n
}

// OTHER SOLUTIONS
const tidyNumber2 = n => {
    let s = n.toString();
    for (let i = 0; i < s.length-1; i++) {
      if (s[i] > s[i+1]) return false;
    }
    return true;
}

const tidyNumber3 = n => [...String(n)].sort().join('') == n