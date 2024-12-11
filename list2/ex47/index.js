function callBackExample(value) {
  return value * 2;
}

export function transformingObjectProperties(callBack) {
  const data = {
    a: 1,
    b: 2,
    c: 3,
  };

  const transformedData = Object.entries(data).reduce(
    (acc, [key, value]) => {
      acc[key] = callBack(value);
      return acc;
    },
    { ...data }
  );
  console.log(JSON.stringify(transformedData));
}
transformingObjectProperties(callBackExample);
