/*
Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

Example:

'acb' --> 'bca'
'aabacbaa' --> 'bbabcabb'
*/

// MY SOLUTION
const switcheroo = x => x
    .split('')
    .map(e => e === 'a' ? 'b' : e === 'b' ? 'a' : e)
    .join('')