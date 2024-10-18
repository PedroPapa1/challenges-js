export function randomNumberArray() {
    function generateRandomNumber(length) {
        const numbers = [];

        for (let i = 0; i < length; i++) {
            numbers.push(Math.floor(Math.random() * 100));
        }
        return numbers;
    }

    function orderRandomNumbers(numbers) {
        return numbers.sort((a, b) => a - b);
    }
    console.log(`All the numbers on the order: ${orderRandomNumbers(generateRandomNumber(20))}.`)
}
randomNumberArray();