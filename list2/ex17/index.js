import promptSync from 'prompt-sync';
const prompt = promptSync();

const NUMBER_OF_PEOPLE = 9;
const MAOIRITY = 18

export function ageFiltering() {
    function storesData() {
        const names = [];
        const ages = [];

        for (let i = 0; i < NUMBER_OF_PEOPLE; i++) {
            console.log(`Insert the name of person (${i + 1}).`);
            const namesPrompt = prompt('>');

            console.log(`Insert the age of person (${i + 1}).`);
            const agesPrompt = parseInt(prompt('>'));

            names.push(namesPrompt);
            ages.push(agesPrompt);
        }

        return { names, ages };
    }

    function ageOrganizer(names, ages) {
        console.log('Underage people:');
        for (let i = 0; i < ages.length; i++) {
            if (ages[i] < MAOIRITY) {
                console.log(`Name: ${names[i]}, Age: ${ages[i]}.`);
            }
        }
    }
    const { names, ages } = storesData();
    ageOrganizer(names, ages);
}
ageFiltering();