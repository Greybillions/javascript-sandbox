'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const gridSize = 9,
    solveBtn = document.querySelector('#solve-btn');

  solveBtn.addEventListener('click', solveSudoku);

  const sudokuGrid = document.querySelector('#sudoku-grid');
  // Create the sudoku grid and input cells
  for (let row = 0; row < gridSize; row++) {
    const newRow = document.createElement('tr');
    for (let col = 0; col < gridSize; col++) {
      const cell = document.createElement('td'),
        input = document.createElement('input');
      input.type = 'number';
      input.className = 'cell';
      input.id = `cell-${row}-${col}`;
      cell.appendChild(input); // Append input to cell
      newRow.appendChild(cell); // Append cell to newRow
    }
    sudokuGrid.appendChild(newRow); // Append newRow to sudokuGrid
  }
});

async function solveSudoku() {
  const gridSize = 9;
  const sudokuArr = [];

  // Fill sudokuArr with input values from the grid
  for (let row = 0; row < gridSize; row++) {
    sudokuArr[row] = [];
    for (let col = 0; col < gridSize; col++) {
      const cellId = `cell-${row}-${col}`,
        cellValue = document.querySelector(`#${cellId}`).value;
      sudokuArr[row][col] = cellValue !== '' ? parseInt(cellValue) : 0;
    }
  }

  // Identify user-input cell and mark them
  for (let row = 0; row < gridSize; row++) {
    for (let col = 0; col < gridSize; col++) {
      const cellId = `cell-${row}-${col}`,
        cell = document.querySelector(`#${cellId}`);

      if (sudokuArr[row][col] !== 0) {
        cell.classList.add('user-input');
      }
    }
  }

  // Solve the sudoku
  if (solveSudokuHelper(sudokuArr)) {
    for (let row = 0; row < gridSize; row++) {
      for (let col = 0; col < gridSize; col++) {
        const cellId = `cell-${row}-${col}`,
          cell = document.querySelector(`#${cellId}`);

        // Fill in solved values with some animation
        if (!cell.classList.contains('user-input')) {
          cell.value = sudokuArr[row][col];
          cell.classList.add('solved');
          await sleep(20); // To add delay for visualization
        }
      }
    }
  } else {
    alert('No Solution exists for the given Sudoku Puzzle');
  }
}

function solveSudokuHelper(board) {
  const gridSize = 9; // Ensure gridSize is defined
  for (let row = 0; row < gridSize; row++) {
    for (let col = 0; col < gridSize; col++) {
      if (board[row][col] === 0) {
        for (let num = 1; num <= 9; num++) {
          // Ensure numbers are from 1 to 9
          if (isValidMove(board, row, col, num)) {
            board[row][col] = num;

            // Recursively attempt to solve the sudoku
            if (solveSudokuHelper(board)) return true; // Puzzle solved
            board[row][col] = 0; // Backtrack
          }
        }
        return false; // No valid number found
      }
    }
  }
  return true; // All cells filled
}

function isValidMove(board, row, col, num) {
  const gridSize = 9;

  // Check row and col for conflict
  for (let i = 0; i < gridSize; i++) {
    if (board[row][i] === num || board[i][col] === num) return false; // Conflict found
  }

  // Check the 3*3 sub-grid for conflict
  const startRow = Math.floor(row / 3) * 3,
    startCol = Math.floor(col / 3) * 3;

  for (let i = startRow; i < startRow + 3; i++) {
    for (let j = startCol; j < startCol + 3; j++) {
      // Correct increment
      if (board[i][j] === num) {
        return false; // Conflict found
      }
    }
  }
  return true; // No conflicts found
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
