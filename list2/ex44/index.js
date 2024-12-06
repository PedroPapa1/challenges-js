export function countingStringPropertiesInAnObject() {
  const data = {
    name: "Pedro",
    age: 19,
    city: "São Caetano do Sul",
    email: "pedro.papa@cloudbeds.com",
  };

  const stringCount = Object.values(data).filter((value) => typeof value === "string").length;

  console.log(`Has ${stringCount} strings in the object.`);
}
countingStringPropertiesInAnObject();
