/*
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

For example, the score of abad is 8 (1 + 2 + 1 + 4).

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.
*/

// MY SOLUTION
function high(x){
    const guide = [...'abcdefghijklmnopqrstuvwxyz']
    let highest = 'x'
    let total = 0
    // Find longest word
    x.split(' ').forEach((word, i) => {
        // Find total for each word
        let wordTotal = 0
        word.split('').forEach(letter => {
            wordTotal += guide.indexOf(letter) + 1 
        })
        // Set new longest if current word has higher score
        if (wordTotal > total) {
            total = wordTotal
            highest = word
        }
    })
    return highest
}

// OTHER SOLUTIONS
function high(x) {
    const guide = 'abcdefghijklmnopqrstuvwxyz';
    
    const calculateWordTotal = (word) => {
        return word.split('').reduce((acc, letter) => acc + guide.indexOf(letter) + 1, 0);
    };

    const words = x.split(' ');
    
    let highest = words[0] || 'x';
    let highestTotal = calculateWordTotal(highest);

    for (let i = 1; i < words.length; i++) {
        const wordTotal = calculateWordTotal(words[i]);

        if (wordTotal > highestTotal) {
            highestTotal = wordTotal;
            highest = words[i];
        }
    }

    return highest;
}