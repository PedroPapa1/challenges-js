import promptSync from 'prompt-sync';
const prompt = promptSync();

const MINUTES_IN_A_DAY = 1440;
const LIFE_LOST_PER_CIGARETTE_IN_MINUTES = 10;
const DAYS_IN_A_YEAR = 365;

export function lifeReductionCalculator() {
    console.log(`How many cigarettes do you smoke per day? (Just use numbers)`);
    const cigarettesPerDay = parseInt(prompt(`>`));

    console.log(`How many years have you been smoking? (Just use numbers)`);
    const timeSmoking = parseInt(prompt(`>`));

    function lifeLost() {
        const minutesLostPerDay = cigarettesPerDay * LIFE_LOST_PER_CIGARETTE_IN_MINUTES;
        
        const totalMinutesLost = minutesLostPerDay * DAYS_IN_A_YEAR * timeSmoking;
        
        const totalDaysLost = totalMinutesLost / MINUTES_IN_A_DAY;

        const yearsLost = Math.floor(totalDaysLost / DAYS_IN_A_YEAR);
        const remainingDaysLost = Math.round(totalDaysLost % DAYS_IN_A_YEAR);

        if (yearsLost > 0) {
            console.log(`You lost ~${yearsLost} years and ~${remainingDaysLost} days of your life due to smoking.`);
        } else {
            console.log(`You lost ~${remainingDaysLost} days of your life due to smoking.`);
        }
    }

    lifeLost();
}

lifeReductionCalculator();