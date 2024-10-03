import promptSync from 'prompt-sync';
const prompt = promptSync();

export function applePurchaseCalculation() {
    console.log("Insert the number of apples purchased:");
    const apples = parseInt(prompt(">"));

    const DEFAULT_PRICE = 0.30;
    const DISCOUNT_PRICE = 0.25;
    const DISCOUNT_QUANTITY = 12;

    function shop() {
        if (apples < DISCOUNT_QUANTITY) {
            const finalPrice = (apples * DEFAULT_PRICE).toFixed(2);
            return (`Your purchase will cost $${finalPrice} dollars.`);
        }
        
        const discountFinalPrice = (apples * DISCOUNT_PRICE).toFixed(2);
        return (`Congrats!! You have a discount, your purchase will cost $${discountFinalPrice} dollars.`);
    }

    console.log(shop());
}