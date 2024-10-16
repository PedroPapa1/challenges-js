import promptSync from 'prompt-sync';
const prompt = promptSync();

const LUXURY_PER_DAY = 150;
const ECONOMY_PER_DAY = 90;

const LUXURY_KM_DISCOUNT = 200;
const ECONOMY_KM_DISCOUNT = 100;

const LUXURY_MORE_THAN_200KM_PRICE = 0.30;
const LUXURY_LESS_THAN_200KM_PRICE = 0.25;

const ECONOMY_MORE_THAN_100KM_PRICE = 0.20;
const ECONOMY_LESS_THAN_100KM_PRICE = 0.10;



export function carRentalCostCalculation() {
    const opitions = ['economy', 'luxury'];
    console.log('What is the type of the rented car (economy or luxury)?');
    const carType = prompt('>');

    if (!opitions.includes(carType)) {
        console.log('Choose a valid option.');
        return;
    }    

    console.log('how many days was the car rented for? (Insert an INTEGER number)');
    const daysRented = parseInt(prompt('>'));

    console.log('How many km the customer has driven the car? (Insert an INTEGER number)');
    const distance = parseInt(prompt('>'));

    function rentalAccount() {
        const luxuryPerDay = daysRented * LUXURY_PER_DAY;
        const economyPerDay = daysRented * ECONOMY_PER_DAY;

        if (carType === 'economy') {
            if (distance > ECONOMY_KM_DISCOUNT) {
                const economyUpTo100KmResult = distance * ECONOMY_MORE_THAN_100KM_PRICE + economyPerDay;
                console.log(`The price of renting an ${carType} car is $${economyUpTo100KmResult} dollars.`);
            }  else {
                const economyAboveTo100KmResult = distance * ECONOMY_LESS_THAN_100KM_PRICE + economyPerDay;
                console.log(`The price of renting an ${carType} car is $${economyAboveTo100KmResult} dollars.`);
            }
        }

        if (carType === 'luxury') {
            if (distance > LUXURY_KM_DISCOUNT) {
                const luxuryUpTo200KmResult = distance * LUXURY_MORE_THAN_200KM_PRICE + luxuryPerDay;
                console.log(`The price of renting an ${carType} car is $${luxuryUpTo200KmResult} dollars.`);
            }  else {
                const luxuryAboveTo200KmResult = distance * LUXURY_LESS_THAN_200KM_PRICE + luxuryPerDay;
                console.log(`The price of renting an ${carType} car is $${luxuryAboveTo200KmResult} dollars.`);
            }
        }
    }
    rentalAccount();
}
carRentalCostCalculation();