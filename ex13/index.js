import promptSync from 'prompt-sync';
const prompt = promptSync();

export function table() {
    const NUMBERS_TO_COLLECT = 5; 

    function multiplicationTable () {
        for (let inputNumber = 0; inputNumber < NUMBERS_TO_COLLECT; inputNumber++) {
            console.log("Insert an integer number:");
            const currentNumber = parseInt(prompt(">"));

            for (let multiplier = 1; multiplier <= currentNumber; multiplier++) {
                const result = multiplier * currentNumber;
                console.log(`${multiplier} x ${currentNumber} = ${result}`);
            }
            console.log("--------------------");
        }
    }

    multiplicationTable();
}