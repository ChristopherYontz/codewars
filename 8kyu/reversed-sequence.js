/*
*Build a function that returns an array of integers from n to 1 where n>0.

*Example : n=5 --> [5,4,3,2,1]
*/

// MY SOLUTION
function reverseSeq(n) {
    let newArr = [];
    for(let i = n; i >= 1; i--) {
        newArr.push(i)
    }
    return newArr;
}

// OTHER SOLUTIONS
const reverseSeq = n => {
  return Array(n).fill(0).map((e, i) => n - i );
};

/*
Array(n) creates a new array with n length (undefined elements),
fill fills each undefined element with 0,
e = current element value, i = current index. n - i calculates a value for each index
*/

const reverseSeq = length => Array.from({length}, () => length--)