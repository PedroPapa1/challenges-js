import promptSync from 'prompt-sync';
const prompt = promptSync();

const HOUR_CHECKOUT = 10;
const HOUR_PREMIUM_CHECKOUT = 20;
 
const POINTS_PER_HOUR_FOR_MORE_THAN_10_HOURS = 2;
const POINTS_PER_HOUR_FOR_BETWEEN_10_AND_20_HOURS = 5;
const POINTS_PER_HOUR_FOR_MORE_THAN_20_HOURS = 10;

const POINT_PRICE = 0.05;

export function fitnessRewardsProgram () {
    console.log('How many hours of exercise did you do in a month? (Insert an INTEGER number)');
    const hoursOfExercise = parseInt(prompt('>'));

    function hoursCalculation() {
        if (hoursOfExercise < HOUR_CHECKOUT) {
            const minminimalEarn = hoursOfExercise * POINTS_PER_HOUR_FOR_MORE_THAN_10_HOURS * POINT_PRICE;
            console.log(`CONGRATS!! You earn $${minminimalEarn} dollars for your exercises.`);
        } else if (hoursOfExercise > HOUR_CHECKOUT && hoursOfExercise < HOUR_PREMIUM_CHECKOUT) {
            const mediumEarn = hoursOfExercise * POINTS_PER_HOUR_FOR_BETWEEN_10_AND_20_HOURS * POINT_PRICE
            console.log(`CONGRATS!! You earn $${mediumEarn} dollars for your exercises.`);
        } else {
            const maxEarn = hoursOfExercise * POINTS_PER_HOUR_FOR_MORE_THAN_20_HOURS * POINT_PRICE;
            console.log(`CONGRATS!! You earn $${maxEarn} dollars for your exercises.`);
        }
    }
    hoursCalculation();
}
fitnessRewardsProgram();