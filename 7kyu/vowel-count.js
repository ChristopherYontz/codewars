// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

// MY SOLUTION
function getCount(str) {
    let vowels = str
    .split('')
    .filter(letter => letter ==='a'|| letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u');
    return vowels.length;
}

const getCount = (str) => str
.split('')
.filter(letter => letter ==='a'|| letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u')
.length;

// OTHER SOLUTIONS
function getCount2(str) {
    return (str.match(/[aeiou]/ig)||[]).length; // defines char class [aeiou]. i makes class case insensitive. g means global (all occurances, not just the first)
  }