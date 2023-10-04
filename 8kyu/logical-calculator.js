/*
Given an array of Boolean values and a logical operator, return a Boolean result based on sequentially applying the operator to the values in the array.
Examples

    booleans = [True, True, False], operator = "AND"

    True AND True -> True
    True AND False -> False
    return False

    booleans = [True, True, False], operator = "OR"

    True OR True -> True
    True OR False -> True
    return True

    booleans = [True, True, False], operator = "XOR"

    True XOR True -> False
    False XOR False -> False
    return False

Input

    an array of Boolean values (1 <= array_length <= 50)
    a string specifying a logical operator: "AND", "OR", "XOR"

Output

A Boolean value (True or False).
*/

// MY SOLUTION
const logicalCalc = (arr, op) => {
   if (arr.length === 0) {
    return false;
   }

   let result = arr[0];

   for (let i = 1; i < arr.length; i++) {
    if (op === 'AND') {
            result = result && arr[i];
        } else if (op === 'OR') {
            result = result || arr[i];
        } else if (op === 'XOR') {
            result = result !== arr[i]
        }
    }
    return result;
}

// OTHER SOLUTIONS
const logicalCalc2 = (arr, op) => {
    const ops = {
        'AND' : (a, b) => a && b,
        'OR' : (a, b) => a || b,
        'XOR' : (a, b) => a !== b
    }
    return arr.reduce(arr[op]);
}

const logicalCalc3 = (arr, op) =>
    op === 'AND' ? arr.every(v => v) :
    op === 'OR' ? arr.some(v => v) : !!arr.reduce((a, c) => a ^ c);