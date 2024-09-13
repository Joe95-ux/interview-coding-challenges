// Climbing Stairs

// Problem Description:
// You are climbing a staircase. It takes n steps to reach the top. 
// Each time you can climb 1 or 2 steps. Find how many distinct ways you can reach the top.

// Solution:

function climbStairs(n) {
  if (n <= 2) return n;
  
  let a = 1, b = 2;
  
  for (let i = 3; i <= n; i++) {
    const temp = a + b;
    a = b;
    b = temp;
  }
  
  return b;
}

// Test case
console.log(climbStairs(3)); // Output: 3