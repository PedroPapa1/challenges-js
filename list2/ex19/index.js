import promptSync from 'prompt-sync';
const prompt = promptSync();

const date = {}

function getTimeInput({ timeType, maxTime, minTime }) {
    let isTimeValid = false;
    let timeInput;
    do {
        console.log(`Insert the ${timeType}:`);
        timeInput = parseInt(prompt('>'));

        if (timeInput > maxTime || timeInput < minTime) {
            console.log(`Insert a valid ${timeType} (between ${minTime} - ${maxTime})`);
        } else {
            isTimeValid = true;
        }
    } while (!isTimeValid)
    return timeInput;
}

export function timeValidation() {
    console.log('What time is it? (24h)');

    date.hour = getTimeInput({
        timeType: 'hour',
        maxTime: 23,
        minTime: 0
    });

    date.minute = getTimeInput({
        timeType: 'minute',
        maxTime: 59,
        minTime: 0
    });

    date.second = getTimeInput({
        timeType: 'second', 
        maxTime: 59, 
        minTime: 0
    });

    const fixHour = String(date.hour).padStart(2, '0');
    const fixMinute = String(date.minute).padStart(2, '0');
    const fixSecond = String(date.second).padStart(2, '0');

    console.log(`Time: ${fixHour}:${fixMinute}:${fixSecond}`);
}
timeValidation();