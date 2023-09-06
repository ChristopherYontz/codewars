/*
Kata Task
I have a cat and a dog.

I got them at the same time as kitten/puppy. That was humanYears years ago.

Return their respective ages now as [humanYears,catYears,dogYears]

NOTES:

humanYears >= 1
humanYears are whole numbers only
Cat Years
15 cat years for first year
+9 cat years for second year
+4 cat years for each year after that
Dog Years
15 dog years for first year
+9 dog years for second year
+5 dog years for each year after that
*/

// MY SOLUTION
function humanYearsCatYearsDogYears(humanYears) {
    if (humanYears === 1) {
        return [1, 15, 15]
    } else if (humanYears === 2) {
        return [2, 24, 24]
    } else {
        let catYears = 24 + (4 * (humanYears - 2))
        let dogYears = 24 + (5 * (humanYears - 2))
        return [humanYears, catYears, dogYears]
    }
}

// OTHER SOLUTIONS
const humanYearsCatYearsDogYears = humanYears => [
    humanYears,
    (humanYears - 1 ? 16 : 11) + 4 * humanYears,
    (humanYears - 1 ? 14 : 10) + 5 * humanYears
]