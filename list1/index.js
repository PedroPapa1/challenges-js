import { convertDegrees } from './ex1/index.js';
import { resultOfTheElection } from './ex2/index.js';
import { integerOperations } from './ex3/index.js';
import { studentGrades } from './ex4_ex5/index.js';
import { triangleType } from './ex6/index.js';
import { applePurchaseCalculation } from './ex7/index.js';
import { sortValues } from './ex8/index.js';
import { productOrigin } from './ex9/index.js';
import { repeatIntegerDisplay } from './ex10/index.js';
import { evenOrOddCheck } from './ex11/index.js';
import { numbersDivisibleBy11WithRemainder5 } from './ex12/index.js';
import { table } from './ex13/index.js';
import { arithmeticMeanCalculation } from './ex14/index.js';
import { weightedAverageCalculation } from './ex15/index.js';
import { primeNumbersGreaterthan100 } from './ex16/index.js';

import promptSync from 'prompt-sync';
const prompt = promptSync();

const FIRST_EXERCISE = 1;
const LAST_EXERCISE = 16;
const EXITING_CHOICE = 0;
const BACK_TO_MENU_CHOICE = 1;
const TRY_AGAIN_CHOICE = 2;

function exit() {
    process.exit();
}

function displayMenu(){
    console.log("Insert a integer number to choose a exercise!");
    console.log("1. Temperature Conversion.");
    console.log("2. Voter Statistics.");
    console.log("3. Integer Operations.");
    console.log("4. Student Grades.");
    console.log("6. Triangle Type.");
    console.log("7. Apple Purchase Calculation.");
    console.log("8. Sort Values.");
    console.log("9. Product Origin.");
    console.log("10. Repeat Integer Display.");
    console.log("11. Even or Odd Check.");
    console.log("12. Numbers Divisible by 11 with Remainder 5.");
    console.log("13. Multiplication Table.");
    console.log("14. Arithmetic Mean Calculation.");
    console.log("15. Weighted Average Calculation.");
    console.log("16. Prime Numbers Greater than 100.");
    console.log("0. Exit.");
}

function getValidInteger(promptMessage){
    while(true){
        const value = parseInt(prompt(promptMessage))
        if (Number.isInteger(value)) {
            return value;
        }
        confirmContinue();
    }
}

function confirmContinue() {
    let choice;

    while (choice != BACK_TO_MENU_CHOICE) {
        console.log("Please insert a valid integer number.");
        console.log("1. Back to menu.");
        console.log("0. Exit.");
        choice = getValidInteger(">");

        if (choice === BACK_TO_MENU_CHOICE) {
            displayMenu();
        } else if (choice === EXITING_CHOICE) {
            console.log("Exiting the program.");
            exit();
        } 
    }
}

function executeExercise(choice) {
    switch (choice) {
        case 0:
            console.log("Exiting the program.");
            exit();
            break;
        case 1:
            convertDegrees();
            break;
        case 2:
            resultOfTheElection();
            break;
        case 3: 
            integerOperations();
            break;
        case 4:
        case 5:
            studentGrades();
            break;
        case 6:
            triangleType();
            break;
        case 7:
            applePurchaseCalculation();
            break;
        case 8:
            sortValues();
            break;
        case 9:
            productOrigin();
            break;
        case 10:
            repeatIntegerDisplay();
            break;
        case 11:
            evenOrOddCheck();
            break;
        case 12:
            numbersDivisibleBy11WithRemainder5();
            break;
        case 13:
            table();
            break;
        case 14:
            arithmeticMeanCalculation();
            break;
        case 15:
            weightedAverageCalculation();
            break;
        case 16:
            primeNumbersGreaterthan100();
            break;
        default:
            console.log("Please insert a valid number.");
            break;
    }
}

function menu(){
    while(true) {
        let secondChoice;
        let validOption;

        displayMenu();
        const userChoice = getValidInteger(">");

        executeExercise(userChoice);
       
        do {
            if(userChoice >= FIRST_EXERCISE && userChoice <= LAST_EXERCISE) {
                console.log("1. Back to menu.");
                console.log("2. Try again.");
                console.log("0. Exit.");
                secondChoice = getValidInteger(">");
            }else if (userChoice > LAST_EXERCISE){
                console.log("1. Back to menu.");
                console.log("0. Exit.");
                secondChoice = getValidInteger(">");
            }

            if (secondChoice === EXITING_CHOICE) {
                console.log("Exiting the program.");
                exit();
            }else if (secondChoice === BACK_TO_MENU_CHOICE) {
                validOption = true;
            }else if (secondChoice === TRY_AGAIN_CHOICE) {
                executeExercise(userChoice);
            }else {
                console.log("Invalid option. Please choose a valid action.");
                validOption = false;
            }
        } while (!validOption);
    }
}

menu();