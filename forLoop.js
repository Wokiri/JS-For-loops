// From a given sentence, list all the missing alphabets in an array

const alphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
]

const jsonMissingAlphabets = []

const testSentence = (sentence = '') => {
    sentence = sentence.toUpperCase()
    sentence = sentence.trim()
    let tempStore = 0

    for (let i = 0; i <= 25; i++) {
        for (let j = 0; j <= sentence.length; j++) {
            if (alphabets[i] === sentence[j]) {
                tempStore++
                break
            }
            if (alphabets[i] !== sentence[j] && j === sentence.length - 1) {
                jsonMissingAlphabets[i - tempStore] = alphabets[i]
            }
            continue
        }
    }
    return jsonMissingAlphabets
}

// console.log(testSentence('The sun rises in the east, and sets in the west'))
console.log(testSentence('The quick brown fox jumped over the lazy dog'))