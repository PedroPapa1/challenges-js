export function combiningStoreInventories() {
  const inventoryA = {
    banana: 4,
    apple: 10,
    watermelon: 2,
  };
  const inventoryB = {
    banana: 30,
    watermelon: 5,
    grape: 6,
  };

  const combinedInventory = Object.entries(inventoryB).reduce(
    (acc, [key, value]) => {
      acc[key] = acc[key] ? acc[key] + value : value;
      return acc;
    },
    { ...inventoryA }
  );
  console.log(combinedInventory);
}
combiningStoreInventories();
