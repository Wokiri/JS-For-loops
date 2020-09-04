// Log the first 10 prime numbers

// A prime number is any number that is divisible ONLY by itself and 1.


let primeNumbers = []
let neededNumber = 10 //The number of prime numbers needed
let indexStorage = 2 // helps to resolve a case where a array would contain an empty space
let thePrimeNumbers = ''

/* We need this first loop to access every item in counting from 0*/
loopAllNumbers:
    for (let prime = 0;; prime++) {

        if (prime <= 1) {
            continue loopAllNumbers
        }

        if (prime === 2) {
            primeNumbers[indexStorage - 2] = prime
            thePrimeNumbers += `${prime}, `
            continue loopAllNumbers
        }

        /* We need this second loop to check every "primes" UNTIL when the array is full*/
        loopTestingWithDivisors:
            for (let items = prime - 1; items >= 2; items--) {
                let isMultiple = prime % items === 0

                if (isMultiple) {
                    indexStorage++
                    break loopTestingWithDivisors
                } else {
                    if (items === 2) {
                        primeNumbers[prime - indexStorage] = prime
                        thePrimeNumbers += `${prime}, `
                        break loopTestingWithDivisors
                    }
                    continue loopTestingWithDivisors
                }
            }

        if (primeNumbers.length === neededNumber) {
            break
        }
    }

console.log(thePrimeNumbers)
console.log(primeNumbers)