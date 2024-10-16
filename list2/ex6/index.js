import promptSync from 'prompt-sync';
const prompt = promptSync();

export function numberGuessingGame() {
    console.log('Choose a random number between 1 and 5. (Insert an INTEGER number)');
    const userChoice = parseInt(prompt('>'));

    const randomCodeChoice = Math.floor(Math.random() * 5) + 1;

        if (userChoice < 1 || userChoice > 5) {
            console.log('Insert a valid option.');
            return;
        }
    
    if (userChoice === randomCodeChoice) {
        console.log(`You won! The code chose ${randomCodeChoice}, and you chose ${userChoice}.`);
    } else {
        console.log(`You lost! The code chose ${randomCodeChoice}, and you chose ${userChoice}.`);
    }

}
numberGuessingGame();