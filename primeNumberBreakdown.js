//To solve this problem, we need to continuously split a number into its prime factors. 
//After splitting the number into prime factors, we sum them to get a new number and repeat the process. 
//We stop when the number can no longer be split 
//(i.e., when it's a prime number itself or when the sum results in a prime number that can't be further split).

// Problem Breakdown

//     Prime Factorization: Find all the prime factors of a number n such that their product is equal to n.
//     Sum the Factors: After finding the prime factors, sum them to get a new number.
//     Repeat the Process: Repeat the process with the new number until it cannot be split any further.

// Example

// For n = 24:

//     Prime factors of 24 are 2, 2, 2, 3. (since 2∗2∗2∗3=242∗2∗2∗3=24)
//     Sum of the prime factors is 2 + 2 + 2 + 3 = 9.
//     The prime factors of 9 are 3, 3.
//     Sum of the prime factors is 3 + 3 = 6.
//     The prime factors of 6 are 2, 3.
//     Sum of the prime factors is 2 + 3 = 5.
//     5 is a prime number and can't be split further.

// Helper function to check if a number is prime
function isPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}

// Helper function to find all prime factors of a number
function primeFactors(n) {
    const factors = [];
    // Divide out all 2s
    while (n % 2 === 0) {
        factors.push(2);
        n = n / 2;
    }
    // Check for odd factors from 3 onwards
    for (let i = 3; i * i <= n; i += 2) {
        while (n % i === 0) {
            factors.push(i);
            n = n / i;
        }
    }
    // If there's any prime factor greater than sqrt(n), add it
    if (n > 2) {
        factors.push(n);
    }
    return factors;
}

// Main function to repeatedly split a number into its prime factors
function splitUntilCannotSplit(n) {
    let currentNumber = n;
    while (!isPrime(currentNumber)) {
        const factors = primeFactors(currentNumber);
        console.log(`Prime factors of ${currentNumber}: ${factors}`);
        currentNumber = factors.reduce((sum, factor) => sum + factor, 0);
        console.log(`Sum of factors: ${currentNumber}`);
    }
    console.log(`Final prime number that cannot be split further: ${currentNumber}`);
    return currentNumber;
}

// Test cases
splitUntilCannotSplit(24); // Example with n = 24
splitUntilCannotSplit(15); // Example with n = 15
splitUntilCannotSplit(18); // Example with n = 18




// Explanation

//     Prime Check (isPrime):
//         A number n is prime if it is greater than 1 and not divisible by any number from 2 to sqrt(n).
//     Prime Factorization (primeFactors):
//         Start with the smallest prime (2) and divide n by 2 until it is no longer divisible.
//         Continue checking for factors from 3 upwards (only odd numbers, since even numbers are not prime except 2).
//         If there is any prime factor larger than sqrt(n), add it directly.
//     Main Loop (splitUntilCannotSplit):
//         The function initializes with the input number n.
//         While the number is not prime, find its prime factors.
//         Sum these factors to get the next number.
//         Continue until a prime number is reached.

// Example Execution

// For n = 24:

//     First Iteration:
//         Prime factors of 24: [2, 2, 2, 3]
//         Sum: 9
//     Second Iteration:
//         Prime factors of 9: [3, 3]
//         Sum: 6
//     Third Iteration:
//         Prime factors of 6: [2, 3]
//         Sum: 5
//     Final Output:
//         5 is a prime number, so the process stops.

// This JavaScript code effectively solves the splitting number problem 
// by repeatedly decomposing the number into its prime factors and summing them until a prime number is reached.