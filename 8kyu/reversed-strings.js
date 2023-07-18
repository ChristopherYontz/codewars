// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

// MY SOLUTION

function solution(str){
    var splitStr = str.split("");
    var reverseAry = splitStr.reverse();
    var joinAry = reverseAry.join("")
    return joinAry;
}

// TOP-RATED SOLUTIONS

function solution(str){
    return str.split('').reverse().join('');  
  }

const solution = str => str.split('').reverse().join('');