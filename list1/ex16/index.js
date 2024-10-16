export function primeNumbersGreaterthan100(){
    const INITIAL_DIVISOR = 2;

    function isPrime(num) {
        const isPossiblePrime = num > 1;

        if (!isPossiblePrime) {
            return false;
        }

        for (let currentDivisor = INITIAL_DIVISOR; currentDivisor <= Math.sqrt(num); currentDivisor++) {
            if (num % currentDivisor === 0) {
                return false;
            }
        }
        return true;
    }

    function findPrimesAbove100(count) {
        const primes = [];
        let currentNumber = 101;

        while (primes.length < count) {
            if (isPrime(currentNumber)) {
                primes.push(currentNumber);
            }
            currentNumber++;
        }

        return primes; 
    }

    console.log(findPrimesAbove100(50));
}
