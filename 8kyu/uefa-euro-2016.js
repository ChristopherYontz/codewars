/*
Finish the uefaEuro2016() function so it return string just like in the examples below:

uefaEuro2016(['Germany', 'Ukraine'],[2, 0]) // "At match Germany - Ukraine, Germany won!"
uefaEuro2016(['Belgium', 'Italy'],[0, 2]) // "At match Belgium - Italy, Italy won!"
uefaEuro2016(['Portugal', 'Iceland'],[1, 1]) // "At match Portugal - Iceland, teams played draw."
*/

// MY SOLUTION
const uefaEuro2016 = (t, s) =>
    s[0] > s[1] ? `At match ${t[0]} - ${t[1]}, ${t[0]} won!` :
    s[1] > s[0] ? `At match ${t[0]} - ${t[1]}, ${t[1]} won!` :
    `At match ${t[0]} - ${t[1]}, teams played draw.`

// OTHER SOLUTIONS
const uefaEuro20162 = (t, s) => {
    const winner = s[0] > s[1] ? t[0] : t[1]
    return s[0] === s[1] ?
        `At match ${t[0]} - ${t[1]}, teams played draw.` :
        `At match ${t[0]} - ${t[1]}, ${winner} won!`
}

function uefaEuro2016(teams, scores) {
    const [team1, team2] = teams
    const [score1, score2] = scores
    const winner = score1 > score2 ? team1 : team2

    return score1 === score2
        ? `At match ${team1} - ${team2}, teams played draw.`
        : `At match ${team1} - ${team2}, ${winner} won!`
}