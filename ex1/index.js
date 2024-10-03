import promptSync from 'prompt-sync';
const prompt = promptSync();

export function convertDegrees () {
    console.log("Insert degrees Celsius");
    const degreesCelsius = parseInt(prompt(">"));
    const degreesInFahrenheit = (degreesCelsius * 9 / 5) + 32;

    console.log(`In Fahrenheit will be ${degreesInFahrenheit} degrees`);
}