/*
Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally.

Unfortunately for you, your drive is very bumpy! Given a string showing either flat road (_) or bumps (n). If you are able to reach home safely by encountering 15 bumps or less, return Woohoo!, otherwise return Car Dead
*/

// MY SOLUTION
const bump = x => {
    const numOfBumps = x.split('').filter(e => e === 'n').length
    return numOfBumps <= 15 ? 'Woohoo!' : 'Car Dead'
}

// OTHER SOLUTIONS
const bump2 = x => x.split('n').length > 15 ? 'Car Dead' : 'Woohoo!'