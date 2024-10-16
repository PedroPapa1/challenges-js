import promptSync from 'prompt-sync';
const prompt = promptSync();

const NUMBER_OF_TERMS = 10;

export function arithmeticProgression() {
    console.log('Insert the first term of the AP');
    const firstTerm = parseInt(prompt('>'));

    console.log('Insert the ratio of the AP');
    const ratio = parseInt(prompt('>'));

    function calculateAp() {
        const terms = [];
        let sum = 0;

        for (let termPosition = 0; termPosition < NUMBER_OF_TERMS; termPosition++) {
            let term = firstTerm + termPosition * ratio;
            terms.push(term);
            sum += term;
        }

        console.log(`The first 10 terms of the AP is ${terms}.`);
        console.log(`The sum of all the terms is ${sum}.`);
    }
    calculateAp();
}
arithmeticProgression();