import promptSync from 'prompt-sync';
const prompt = promptSync();

export function sortValues() {
    const numbersToAscending = []
    let input;

    while( input !== 0) {
        console.log("Insert an integer number (use 0 to stop de loop):");
        input = parseInt(prompt(">"));

        if (input !== 0) {
            numbersToAscending.push(input);
        }
    }

    function sort() {
    const numbersInOrder = numbersToAscending.sort((a, b) => a - b);
    console.log(numbersInOrder);
    }

    sort();
}