import promptSync from 'prompt-sync';
const prompt = promptSync();

let sum = 0;
let count = 0;
let smallestValue;
let evenCount = 0;

let exitLoop;

export function numberAnalysis() {

    do {
        console.log('Inserte an INEGER number.')
        const userNumbers = parseInt(prompt('>'));

        sum += userNumbers;
        count++;

        if (count === 1) {
            smallestValue = userNumbers;
        } else if (userNumbers < smallestValue) {
            smallestValue = userNumbers;
        }

        if (userNumbers % 2 === 0) {
            evenCount++;
        }

        console.log('1. Continue.');
        console.log('0. Show the results.');
        exitLoop = parseInt(prompt('>'));

    } while (exitLoop !== 0);

    const average = sum / count;

    console.log(`The sum of all the numbers is ${sum}.`);
    console.log(`The smallest value of all the numbers is ${smallestValue}.`);
    console.log(`The average of all the numbers is ${average}.`);
    console.log(`The total even numbers is ${evenCount}.`);

}
numberAnalysis();