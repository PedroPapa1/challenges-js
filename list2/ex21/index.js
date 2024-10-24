import promptSync from 'prompt-sync';
const prompt = promptSync();

const WOMEN_WEIGHT_IDEAL_BASE = 62.1;
const WOMEN_WEIGHT_FORMULA = 44.7;
const MEN_WEIGHT_IDEAL_BASE = 72.7;
const MEN_WEIGHT_FORMULA = 58;


export function idealWeightFunction() {
    const gender = {
        male: 'M',
        female: 'F'
    }

    console.log('What is the person gender? (Use M or F).');
    const genderPrompt = prompt('>').toUpperCase();

    if(!Object.values(gender).includes(genderPrompt)) {
        console.log('Insert a valid gender.');
        return;
    }

    console.log('What is the person height in meters ? (Use just float numbers).');
    const heightPrompt = parseFloat(prompt('>'));

    function idealWeightCalculation(height) {
        let idealWeight;

        if (genderPrompt === gender.male) {
            idealWeight = (MEN_WEIGHT_IDEAL_BASE * height) - MEN_WEIGHT_FORMULA;
        } else if (genderPrompt === gender.female) {
            idealWeight = (WOMEN_WEIGHT_IDEAL_BASE * height) - WOMEN_WEIGHT_FORMULA;
        }

        return idealWeight;
    }

    const finalWeight = idealWeightCalculation(heightPrompt);
    console.log(`Your ideal weight is ${finalWeight.toFixed(2)}.`);
}
idealWeightFunction();