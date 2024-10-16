import promptSync from 'prompt-sync';
const prompt = promptSync();

export function weightedAverageCalculation() {
    let decimalNumbers = [];
    let weightOfNumbers = [];
    let input;
    let inputWeight;

    while( input !== 0 && inputWeight !== 0) {
        console.log("Insert an decimal number (use 0 to stop de loop):");
        input = parseFloat(prompt(">"));

        if (input === 0) {
            break;
        }

        console.log("Insert the weight of this number (use 0 to stop de loop):");
        inputWeight = Number(prompt(">"));

        if (inputWeight === 0) {
            break;
        } 

        decimalNumbers.push(input);
        weightOfNumbers.push(inputWeight); 
    } 

    function weightedArithmeticMean () {
        let sumOfTheTop = 0
        let sumOfTheBottom = 0;
        
        for(let i = 0; i < decimalNumbers.length; i++) {
            const topMultiply = decimalNumbers[i] * weightOfNumbers[i];
            sumOfTheTop = sumOfTheTop + topMultiply;
            sumOfTheBottom = sumOfTheBottom + weightOfNumbers[i]; 
        }
        
        return sumOfTheTop / sumOfTheBottom;
    }

    console.log("This is your weighted arithmetic mean " + weightedArithmeticMean());
}
