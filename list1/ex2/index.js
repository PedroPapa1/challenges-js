import promptSync from 'prompt-sync';
const prompt = promptSync();

export function resultOfTheElection () {
   console.log("Insert the number of voters:");
   const voters = parseInt(prompt(">"));

   console.log("Insert the number of invalid votes:");
   const invalidVotes = parseInt(prompt(">"));

   console.log("Insert the number of blank votes:");
   const blankVotes = parseInt(prompt(">"));

   console.log("Insert the number of valid votes:");
   const validsVotes = parseInt(prompt(">"));

   function percentage(partialValue, totalValue) {
      return (100 * partialValue) / totalValue;
   } 

   console.log(percentage(invalidVotes, voters) + "% of null votes.");
   console.log(percentage(blankVotes, voters) + "% of blank votes.");
   console.log(percentage(validsVotes, voters) + "% of valid votes.");
}