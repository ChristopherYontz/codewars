// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] should return 9, because 1(1) + 2(2) + 2(2) = 9




// MY SOLUTION
function squareSum(numbers) {
    let sum = 0;
    for(let i = 0; i < numbers.length; i++) {
        sum += Math.pow(numbers[i], 2);
    }
    return sum;
}

squareSum([1, 2, 2]);

// OTHER SOLUTIONS
function squareSum(numbers) {
    return numbers.reduce((sum, num) => sum += Math.pow(num, 2));
}

function squareSum(numbers){
    return numbers.reduce((sum,num) => sum + (num * num), 0);
  }