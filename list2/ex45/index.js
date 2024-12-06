export function countingStringOccurrencesInAnArray() {
  const fruits = ["banana", "apple", "grape", "banana", "banana", "grape", "watermelon"];

  const count = fruits.reduce((acc, value) => {
    acc[value] = (acc[value] || 0) + 1;
    return acc;
  }, {});
  console.log(count);
}
countingStringOccurrencesInAnArray();
