import promptSync from 'prompt-sync';
const prompt = promptSync();

export function productOrigin() {
    console.log("Insert the origin code.");
    const code = parseInt(prompt(">"));

    switch(code) {
        case 1:
            console.log("South");
            break;
        case 2:
            console.log("North");
            break;
        case 3:
            console.log("East");
            break;
        case 4:
            console.log("West");
            break;
        case 5:
        case 6:
            console.log("Northeast");
            break;
        case 7:
        case 8:
        case 9:
            console.log("Southeast");
            break;
        default:
            if(code >= 10 && code <= 20) {
                console.log ("Midwest");
            } else if(code >= 25 && code <= 50) {
                console.log ("Northeast");
            } else {
                console.log ("Imported product");
            }
            break;
    }
}