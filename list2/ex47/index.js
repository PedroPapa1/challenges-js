export function transformingObjectProperties() {
  const data = {
    a: 1,
    b: 2,
    c: 3,
  };

  const data2 = {};

  const multiplier = Object.entries(data);
  multiplier.forEach(([key, value]) => {
    data2[key] = value * 2;
  });
  console.log(JSON.stringify(data2));
}
transformingObjectProperties();
