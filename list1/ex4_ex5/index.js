import promptSync from 'prompt-sync';
const prompt = promptSync();

export function studentGrades() {
    console.log("Insert yout first grade:");
    const firstGrade = prompt(">");

    console.log("Insert yout second grade: ");
    const secondGrade = prompt(">");

    const PASSING_GRADE = 6;

    function gradeResult() {
        let sum = (Number(firstGrade) + Number(secondGrade)) / 2;   

        if (sum >= PASSING_GRADE) {
            console.log(`Your grade is ${sum} congrats you have been approved!!`);
        } else {
            console.log(`Your grade is ${sum} don't give up!`);
        }
    }

    gradeResult();
}
