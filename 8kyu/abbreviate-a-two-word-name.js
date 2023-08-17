// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F



// MY SOLUTION
function abbrevName(name) {
    let splitName = name.split(' '); //splits string into ['first', 'last']
    let first = splitName[0].slice(0,1).toUpperCase(); //saves first initial on its own
    let last = splitName[1].slice(0,1).toUpperCase(); //saves last initial on its own

    return `${first}.${last}`; //returns firstInitial.lastInitial

}



// OTHER SOLUTIONS
let nameArr = name => name.split(' ').map(i => i[0].toUpperCase()).join('.');

function abbrevName(name) {
    let nameArray = name.split(' ');
    return `${nameArray[0][0]}.${nameArray[1][0]}`.toUpperCase();
}