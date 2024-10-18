const FIX_THE_ELEMENTS_NUMBER = 2;
const NEW_POSITION = 1;

export function fibonacciSequence(elements) {
    let inicialNumbers = [0, 1]; 

    for (let arrayPosition = 0; arrayPosition < elements - FIX_THE_ELEMENTS_NUMBER; arrayPosition++) {
        const addingANextPosition = inicialNumbers[arrayPosition] + inicialNumbers[arrayPosition + NEW_POSITION];
        inicialNumbers.push(addingANextPosition);
    }
    console.log(`The first 10 elements of the Fibonacci sequence are ${inicialNumbers}.`);
}
fibonacciSequence(10);