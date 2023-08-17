// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]



// MY SOLUTION
let arrayOfSheep = [true,  true,  true,  false, true,  true,  true,  true, true, false, true, false, true, false, false, true, true, true,  true, true, false, false, true, true];

// function countSheep(arrayOfSheep) {
//     let numberOfSheep = 0;
//     arrayOfSheep.forEach((sheep) => {
//         if(sheep === true) {
//             numberOfSheep ++;
//         }
//     })
//     return numberOfSheep;
// }

// function countSheep(arrayOfSheep) {
//     let numberOfSheep = 0;
    
//     for(let i = 0; i < arrayOfSheep.length; i++) {
//         if(arrayOfSheep[i] === true) {
//             numberOfSheep ++;
//         }
//     }

//     return numberOfSheep;
// }

let countSheeps = (arrayOfSheep) => {
    let numberOfSheep = 0;
    arrayOfSheep.forEach((sheep) => sheep === true ? numberOfSheep++ : null);
    return numberOfSheep;
}

countSheeps(arrayOfSheep);



// OTHER SOLUTIONS
let countSheeps = (arrayOfSheep) => arrayOfSheep.reduce((count, sheep) => sheep === true ? count + 1 : count, 0); // 0 is the initial value. It's the comma separates it from the rest of the function argument.

let countSheeps = (arrayOfSheeps) => arrayOfSheeps.filter(Boolean).length;