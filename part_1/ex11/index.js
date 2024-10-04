import promptSync from 'prompt-sync';
const prompt = promptSync();

export function evenOrOddCheck() {
    console.log("Insert an integer number.");
    let value = parseInt(prompt(">"));

    const DIVISOR = 2;

    while (value > 0) {
        
        if (value % DIVISOR === 0 ) {
            console.log(`${value} is an even number.`);
        }else {
            console.log(`${value} is an odd number.`);
        }

        console.log("-----------------------------");
        console.log("Insert the next integer number.");
        value = parseInt(prompt(">"));
    }

    console.log("You need to use a integer number! Try again.");
}