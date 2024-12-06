export function salesSummaryByVendor() {
  const sales = [
    {
      vendor: "Pedro",
      value: 400,
    },
    {
      vendor: "Jorge",
      value: 200,
    },
    {
      vendor: "Lucas",
      value: 500,
    },
    {
      vendor: "Pedro",
      value: 600,
    },
    {
      vendor: "Jorge",
      value: 200,
    },
    {
      vendor: "Lucas",
      value: 100,
    },
  ];

  const result = sales.reduce((totalSales, { vendor, value }) => {
    totalSales[vendor] = (totalSales[vendor] || 0) + value;
    return totalSales;
  }, {});

  console.log(result);
}
salesSummaryByVendor();
