import promptSync from 'prompt-sync';
const prompt = promptSync();

export function triangleFormationCheck(){
    console.log('Insert the length of the first line segment. (Insert an INTEGER number)');
    const firstLine = parseInt(prompt('>'));

    console.log('Insert the length of the second line segment. (Insert an INTEGER number)');
    const secondtLine = parseInt(prompt('>'));

    console.log('Insert the length of the third line segment. (Insert an INTEGER number)');
    const thirdLine = parseInt(prompt('>'));


    function checkIfItIsATriangle() {
        const firstLineIsValid = firstLine < secondtLine + thirdLine;
        const secondLineIsValid = secondtLine < firstLine + thirdLine;
        const thirdLineIsValid = thirdLine < firstLine + secondtLine;

        if (firstLineIsValid && secondLineIsValid && thirdLineIsValid) {
            console.log("It's a triangle.");
        } else {
            console.log("It's not a triangle.");
        }
    }
    checkIfItIsATriangle();
}
triangleFormationCheck()