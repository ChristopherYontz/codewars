// DESCRIPTION:
// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.



// MY SOLUTION
let array = [1, -4, 7, 12]

function returnSumOfPositives(array) {
    let sumOfPositives = 0;

    array.forEach((num) => {
        if(num > 0){
            sumOfPositives += num;
        }
    })
    
    return sumOfPositives;
}

returnSumOfPositives(array);

// OTHER SOLUTIONS
function positiveSum(arr) {
    return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
 }

 const positiveSum = (arr) => arr.reduce((sum, n) => n > 0 ? sum + n : sum, 0);