export function financialTransactionsByCategory() {
  const transactions = [
    {
      id: 1,
      value: 400,
      date: "11/08/2024",
      category: "Food",
    },
    {
      id: 2,
      value: 300,
      date: "11/09/2024",
      category: "Car problems",
    },
    {
      id: 3,
      value: 200,
      date: "11/10/2024",
      category: "Food",
    },
    {
      id: 4,
      value: 100,
      date: "11/11/2024",
      category: "Mall",
    },
    {
      id: 5,
      value: 700,
      date: "11/12/2024",
      category: "Car problems",
    },
  ];

  const categories = {};

  transactions.forEach((transaction) => {
    const { category, value } = transaction;
    if (!categories[category]) {
      categories[category] = {
        transactions: [],
        subtotal: 0,
      };
    }

    categories[category].transactions.push(transaction);

    categories[category].subtotal += value;
  });

  console.log(JSON.stringify(categories));
}
financialTransactionsByCategory();
