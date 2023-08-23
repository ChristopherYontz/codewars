// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

// MY SOLUTION
const removeExclamationMarks = str => str.split('!').join('');

// OTHER SOLUTIONS
const removeExclamationMarks2 = str => str.replace(/!/g, '');