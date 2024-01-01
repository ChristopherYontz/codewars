/*
Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']
*/

// MY SOLUTION
const solution = str => {
    let solution = []
    str.split('')
       .forEach((_, i, a) => {
            if(a.length % 2 !== 0 && i % 2 === 0 && i === a.length - 1) { // check if str length and i are odd and if current i is last
                solution.push(a[i] + '_')
            } else if (i % 2 !== 0){ // check if currnet i is odd
                solution.push(a[i - 1] + a[i])
            } 
        }
    )
    return solution
}

// OTHER SOLUTIONS
const solution2 = str => {
    arr = [];
    for(let i = 0; i < str.length; i += 2){
        second = str[i+1] || '_';
        arr.push(str[i] + second);
    }
    return arr;
}