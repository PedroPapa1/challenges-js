import promptSync from 'prompt-sync';
const prompt = promptSync();
 
export function arithmeticMeanCalculation() {
    const decimalNumbers = [];
    let input;

    while( input !== 0) {
        console.log("Insert an decimal number (use 0 to stop de loop):");
        input = parseFloat(prompt(">"));

        if (input !== 0) {
            decimalNumbers.push(input);
        }
    } 

    function arithmeticMean () {

        const totalDecimalNumbers = decimalNumbers.reduce((a, b) => a + b, 0);
        const lengthDecimalNumbers = decimalNumbers.length;
        const totalArithmeticMean = totalDecimalNumbers / lengthDecimalNumbers;
        return totalArithmeticMean;
    }

    console.log("This is your arithmetic mean " + arithmeticMean());
}
