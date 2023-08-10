// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

// Example:
// h = 0
// m = 1
// s = 1

// result = 61000



// MY SOLUTION
function past(h, m, s) {
    let hoursInMilliseconds = h * 60 * 60 * 1000;
    let minutesInMilliseconds = m * 60 * 1000;
    let secondsInMilliseconds = s * 1000; 
    
    return hoursInMilliseconds + minutesInMilliseconds + secondsInMilliseconds;
}



// OTHER SOLUTIONS
let past = (h, m, s) => ((h * 3600) + (m * 60) + s) * 1000;