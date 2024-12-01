export function generateRandomInteger() {
  const randomNumber = Math.random();
  const multiplier = Math.random() > 0.5 ? 100 : -100;

  return Math.floor(randomNumber * multiplier);
}

export function generateMatrix({ rowCount, columnCount }) {
  const matrix = [];

  for (let i = 0; i < rowCount; i++) {
    const row = [];
    for (let j = 0; j < columnCount; j++) {
      row.push(generateRandomInteger());
    }
    matrix.push(row);
  }
  return matrix;
}

export function printMatrix(matrix) {
  matrix.forEach((row) => {
    console.log(JSON.stringify(row));
  });
}
