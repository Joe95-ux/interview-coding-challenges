/**
 * N-Queens Problem

 * Problem:
   The N-Queens puzzle is the problem of placing n chess queens on an n x n 
   chessboard so that no two queens attack each other. Return all distinct 
   solutions to the N-Queens puzzle.

For example:

    Input: n = 4
    Output: [['.Q..', '...Q', 'Q...', '..Q.'], ['..Q.', 'Q...', '...Q', '.Q..']]

Solution:
This is a classical backtracking problem where we place queens on the chessboard 
row by row, checking for valid positions.
 */

function solveNQueens(n) {
    const result = [];
    const board = Array(n).fill().map(() => Array(n).fill('.'));
  
    function isValid(row, col) {
      for (let i = 0; i < row; i++) {
        if (board[i][col] === 'Q') return false;
        if (col - (row - i) >= 0 && board[i][col - (row - i)] === 'Q') return false;
        if (col + (row - i) < n && board[i][col + (row - i)] === 'Q') return false;
      }
      return true;
    }
  
    function backtrack(row) {
      if (row === n) {
        result.push(board.map(r => r.join('')));
        return;
      }
  
      for (let col = 0; col < n; col++) {
        if (isValid(row, col)) {
          board[row][col] = 'Q';
          backtrack(row + 1);
          board[row][col] = '.';
        }
      }
    }
  
    backtrack(0);
    return result;
  }
  
  console.log(solveNQueens(4));
  // Output: [[".Q..", "...Q", "Q...", "..Q."], ["..Q.", "Q...", "...Q", ".Q.."]]

/**
 * Explanation:

    Backtracking: We attempt to place queens row by row. For each queen, we check if the position is valid, i.e., no other queen threatens it horizontally, vertically, or diagonally.
    Validation Function: The isValid function checks whether placing a queen at (row, col) would cause any conflicts with previously placed queens.
    Time Complexity: O(n!), since each row can potentially have n positions, and for each row, we recursively try to place queens on the next row.
 */