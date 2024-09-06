// Problem Description:
// Given n pairs of parentheses, write a function to generate all 
// combinations of well-formed parentheses.

// Example:

// javascript

// Input: n = 3
// Output: ["((()))", "(()())", "(())()", "()(())", "()()()"]

function generateParentheses(n) {
    const result = [];
  
    function backtrack(current, open, close) {
      if (current.length === n * 2) {
        result.push(current);
        return;
      }
  
      if (open < n) {
        backtrack(current + "(", open + 1, close);
      }
      if (close < open) {
        backtrack(current + ")", open, close + 1);
      }
    }
  
    backtrack("", 0, 0);
    return result;
  }
  
  // Test case
  console.log(generateParentheses(3)); // Output: ["((()))", "(()())", "(())()", "()(())", "()()()"]

// Explanation:

// Use a recursive backtracking approach to generate all combinations of parentheses.
// Maintain a count of open and close parentheses and ensure the parentheses are 
// well-formed by checking conditions for adding open or close parentheses.