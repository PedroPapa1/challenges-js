import { generateMatrix, printMatrix } from "../helper.js";

export function rowScalingByDiagonalElements() {
  const rowCount = 50;
  const columnCount = 50;
  const modifiedMatrix = [];

  const matrix = generateMatrix({
    rowCount,
    columnCount,
  });

  printMatrix(matrix);
  console.log("---------------");

  for (let rowIndex = 0; rowIndex < rowCount; rowIndex++) {
    const modifiedMatrixRow = [];
    let rowMultiplier = matrix[rowIndex].find((_, index) => rowIndex === index);

    for (let columnIndex = 0; columnIndex < columnCount; columnIndex++) {
      modifiedMatrixRow.push(matrix[rowIndex][columnIndex] * rowMultiplier);
    }

    modifiedMatrix.push(modifiedMatrixRow);
  }

  printMatrix(modifiedMatrix);
}
rowScalingByDiagonalElements();
