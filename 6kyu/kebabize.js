/*
Modify the kebabize function so that it converts a camel case string into a kebab case.

"camelsHaveThreeHumps"  -->  "camels-have-three-humps"
"camelsHave3Humps"  -->  "camels-have-humps"
"CAMEL"  -->  "c-a-m-e-l"

*/

// MY SOLUTION
const kebabize = s => {
    const guide = 'abcdefghijklmnopqrstuvwxyz'
    const dashed = s
        .split('')
        .map(char => {
            if (guide.includes(char.toLowerCase())) {
                return char === char.toUpperCase() ? '-' + char.toLowerCase() : char.toLowerCase()
            }
        })
        .join('')

    return dashed[0] === '-' ? dashed.slice(1) : dashed
}