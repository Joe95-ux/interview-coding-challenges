// Find the Missing Number

// Problem Description:
// Given an array containing n distinct numbers in the range [0, n], find the missing number.

// Example:

// javascript

// Input: nums = [3, 0, 1]
// Output: 2

// Solution

function findMissingNumber(nums) {
    const n = nums.length;
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = nums.reduce((sum, num) => sum + num, 0);
    
    return expectedSum - actualSum;
  }
  
  // Test case
  console.log(findMissingNumber([3, 0, 1])); // Output: 2
  console.log(findMissingNumber([0, 1])); // Output: 2

//   Explanation:

// Calculate the expected sum for numbers from 0 to n using the 
// formula for the sum of the first n integers.
// Subtract the actual sum of the array from the expected sum to find the missing number.