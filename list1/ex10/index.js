import promptSync from 'prompt-sync';
const prompt = promptSync();

export function repeatIntegerDisplay() {
    console.log("Insert an integer number:");
    const integerNumber = parseInt(prompt(">"));

    const NUMBER_OF_TIMES = 10;

    function repeatNumbers() {
        for (let i = 0; i < NUMBER_OF_TIMES; i++) {
            console.log(integerNumber);
        }
    }

    repeatNumbers();
}
