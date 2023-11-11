/*
Complete the function/method so that it returns the url with anything after the anchor (#) removed.
Examples

"www.codewars.com#about" --> "www.codewars.com"
"www.codewars.com?page=1" -->"www.codewars.com?page=1"
*/

// MY SOLUTION
const removeUrlAnchor = url => url.includes('#') ?
    url.slice(0, url.indexOf('#')) : url

// OTHER SOLUTIONS
const removeUrlAnchor2 = url => url.split('#')[0]