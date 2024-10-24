import promptSync from 'prompt-sync';
const prompt = promptSync();

const LOW_SALARY = 350;

export function salaryAndChildrenAnalysis() {
    let totalSalary = 0;
    let totalChildren = 0;
    let count = 0;
    let highestSalary = 0;
    let personWithLowSalary = 0;


    while(true) {
        console.log('Insert the person salary (Use 0 to stop the loop).');
        const personSalary = parseFloat(prompt('>'));

        if (personSalary === 0) {
            break;
        }

        if (isNaN(personSalary)) {
            console.log('Please use numbers.');
            continue;
        }

        console.log('Insert the number of children of this person. (Use an INTEGER number).');
        const childrenOfThePerson = parseInt(prompt('>'));

        if (isNaN(childrenOfThePerson) || childrenOfThePerson < 0) {
            console.log('Insert a valid number.');
            continue;
        }

        totalSalary += personSalary;
        totalChildren += childrenOfThePerson;
        count++

        if (personSalary > highestSalary) {
            highestSalary = personSalary;
        }

        if (personSalary <= LOW_SALARY) {
            personWithLowSalary++;
        }

    }

    const averageSalary = totalSalary / count;
    const avarageChildren = totalChildren / count;
    const lowSalaryPercentage = (personWithLowSalary / count) * 100;

    console.log(`The avarage salary is $${averageSalary.toFixed(2)} dollars.`);
    console.log(`The average number of children is ${avarageChildren.toFixed(0)}.`);
    console.log(`The highest  salary is $${highestSalary} dollars.`);
    console.log(`the percentage of low salaries is ${lowSalaryPercentage.toFixed(2)}%.`);
}
salaryAndChildrenAnalysis();