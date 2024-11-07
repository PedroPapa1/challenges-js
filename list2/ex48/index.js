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
  const combineInventory = { ...inventoryA };

  const combiningInventories = Object.entries(inventoryB);
  combiningInventories.forEach(([key, value]) => {
    combineInventory[key] = combineInventory[key] ? combineInventory[key] + value : value;
  });
  console.log(JSON.stringify(combineInventory));
}
combiningStoreInventories();
