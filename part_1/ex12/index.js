export function numbersDivisibleBy11WithRemainder5() {
    const START_NUMBER = 1000;
    const END_NUMBER = 1999;
    const REMAINDER_NUMBER = 5;
    const DIVISOR_NUMBER = 11;

    function generateNumbers() {
        for (let currentNumber = START_NUMBER; currentNumber <= END_NUMBER; currentNumber++) {
            if (currentNumber % DIVISOR_NUMBER === REMAINDER_NUMBER) {
                console.log(currentNumber);
            }
        }
    }
    generateNumbers();
}