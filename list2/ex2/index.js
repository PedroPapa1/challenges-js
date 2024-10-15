import promptSync from 'prompt-sync';
const prompt = promptSync();

const MAX_SPEED = 80;
const FINE_AMOUT_PER_KM = 5.00;

export function speedLimitCheck() {
    console.log("Insert the car's speed in km/h: (Just use numbers)");
    const carSpeed = parseInt(prompt('>'));

    function speedCalculator() {
        if (carSpeed > MAX_SPEED) {
            const speedExceeded = carSpeed - MAX_SPEED;
            const fineAmount = speedExceeded * FINE_AMOUT_PER_KM;

            console.log(`you're ${speedExceeded}km/h over the limit! The amount of the fine is $${fineAmount.toFixed(2)} dollars.`)
        } else {
            console.log("You're at the speed limit.");
        }
    }
    speedCalculator();

}
speedLimitCheck();