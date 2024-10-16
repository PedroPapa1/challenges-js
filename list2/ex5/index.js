import promptSync from 'prompt-sync';
const prompt = promptSync();

export function rockPaperScissorsGame() {
    const options = ['rock', 'paper', 'scissor'];

    console.log('Chosse one of (rock, paper or scissor).');
    const userChoice = prompt('>');

    if (!options.includes(userChoice)) {
        console.log('Choose a valid option.');
        return;
    }

    const randomCodeChoice = options[Math.floor(Math.random() * options.length)];
    console.log(`You chose ${userChoice}.`);
    console.log(`The code chose ${randomCodeChoice}.`);

   function result() {
        const rockWins = userChoice === 'rock' && randomCodeChoice === 'scissor';
        const paperWins = userChoice === 'paper' && randomCodeChoice === 'rock';
        const scissorWins = userChoice === 'scissor' && randomCodeChoice === 'paper';

        if (userChoice === randomCodeChoice) {
            console.log(`Draw! Both chose ${userChoice}.`);
        } else if ( rockWins || paperWins || scissorWins) {
            console.log(`You won! ${userChoice} wins ${randomCodeChoice}.`);
        } else {
            console.log(`You lost! ${randomCodeChoice} wins ${randomCodeChoice}.`);
        }
    }
    result()
}
rockPaperScissorsGame();