/** Problem:
  *You are given n balloons, indexed from 0 to n - 1. Each balloon is painted with a number on it. You are asked to burst all the balloons. If you burst balloon i, you will get nums[i - 1] * nums[i] * nums[i + 1] coins. After the balloon bursts, the adjacent balloons become neighbors. Your goal is to find the maximum coins you can collect by bursting the balloons wisely.

  * For example:

    Input: nums = [3,1,5,8]
    Output: 167
    Explanation: The maximum coins can be obtained by bursting balloons in the following order: 1, 5, 8, 3.

Solution:
This problem can be solved using dynamic programming with the concept of divide and conquer.
*/

function maxCoins(nums) {
  const n = nums.length;
  const arr = [1, ...nums, 1]; // Add 1 at both ends to simulate edges
  const dp = Array.from({ length: n + 2 }, () => Array(n + 2).fill(0));

  for (let length = 1; length <= n; length++) {
    for (let left = 1; left <= n - length + 1; left++) {
      const right = left + length - 1;
      for (let i = left; i <= right; i++) {
        dp[left][right] = Math.max(
          dp[left][right],
          arr[left - 1] * arr[i] * arr[right + 1] +
            dp[left][i - 1] +
            dp[i + 1][right]
        );
      }
    }
  }

  return dp[1][n];
}

console.log(maxCoins([3, 1, 5, 8])); // Output: 167

/**
 * Explanation:

    Dynamic Programming (DP): We use a DP table where dp[left][right] 
    represents the maximum coins that can be collected by bursting all 
    the balloons between left and right. The idea is to burst balloons 
    in an optimal order by solving smaller subproblems.
    State Transition: For each subproblem (bounded by left and right), 
    we choose an index i where the balloon is the last to be burst. 
    We then calculate the coins based on the result of bursting balloons to the left and right of i.
    Time Complexity: O(n³), where n is the number of balloons.
 */
