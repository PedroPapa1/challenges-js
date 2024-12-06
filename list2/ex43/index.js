export function combiningObjects() {
  const obj1 = {
    name: "Pedro",
    age: 19,
    city: "São Caetano do Sul",
  };

  const obj2 = {
    age: 25,
    city: "Rio de Janeiro",
    salary: 2000,
  };

  const combinedObjects = { ...obj1, ...obj2 };
  console.log(JSON.stringify(combinedObjects));
}
combiningObjects();
