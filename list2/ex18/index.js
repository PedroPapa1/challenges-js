import promptSync from 'prompt-sync';
const prompt = promptSync();

export function employeeRecord() {
    let employee = {}

    console.log("Insert the employee's name.");
    employee.name = prompt('>');

    console.log("enter the employee's position.");
    employee.position = prompt('>');

    console.log("enter the employee's salary.");
    employee.salary = parseFloat(prompt('>'));

    if(isNaN(employee.salary)) {
        console.log('Insert a valid number.');
        return;
    }

    console.log('Employee recorded:');
    console.log(`Name: ${employee.name}.`);
    console.log(`Position: ${employee.position}.`);
    console.log(`Salary: ${employee.salary}.`);
}
employeeRecord();
