function diagonalDifference(matrix) {
    let difference = 0;
    const n = matrix.length;

    for (let i = 0; i < n; i++) {
        difference += matrix[i][i] - matrix[i][n - 1 - i];
    }

    return Math.abs(difference);
}

const Matrix = [[1, 2, 0], [4, 5, 6], [7, 8, 9]];
const resultDiagonalDifference = diagonalDifference(Matrix);
console.log(resultDiagonalDifference);