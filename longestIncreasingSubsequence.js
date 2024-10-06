/** Longest Increasing Subsequence

Problem:
Given an integer array nums, return the length of the longest strictly increasing subsequence.

For example:

    Input: [10,9,2,5,3,7,101,18]
    Output: 4
    Explanation: The longest increasing subsequence is [2,3,7,101].

Solution: This can be solved using dynamic programming with a time complexity of O(n²), but we can also 
optimize it using binary search to achieve O(n log n) time.
Approach 1: Dynamic Programming (O(n²))
*/

function lengthOfLIS(nums) {
  if (nums.length === 0) return 0;

  const dp = new Array(nums.length).fill(1); // dp[i] represents the length of the LIS ending at index i

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  return Math.max(...dp);  // The maximum value in dp is the length of the LIS
}

console.log(lengthOfLIS([10,9,2,5,3,7,101,18]));  // Output: 4

/**Explanation:

    Dynamic Programming: We use an array dp where dp[i] stores the length of the longest increasing 
    subsequence ending at index i. For each i, we look at all previous elements and update dp[i] if nums[i] > nums[j].
    Time Complexity: O(n²) due to the nested loop over the array.
    */

/** Approach 2: Binary Search (O(n log n))

We can optimize this using binary search to track the smallest possible end element of an increasing subsequence of each length.
*/

function lengthOfLIS(nums) {
  const tails = [];

  for (let num of nums) {
    let left = 0, right = tails.length;

    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (tails[mid] < num) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }

    tails[left] = num;
  }

  return tails.length;
}

console.log(lengthOfLIS([10,9,2,5,3,7,101,18]));  // Output: 4

/**Explanation:

    Binary Search + Greedy: We maintain an array tails, where tails[i] holds the smallest end element of an increasing subsequence of length i+1. We use binary search to find the appropriate position to update tails.
    Time Complexity: O(n log n), where n is the length of the array.
    */