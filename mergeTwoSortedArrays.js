// Merge Two Sorted Arrays

// Problem Description:
// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as
//  one sorted array. You may assume that nums1 has enough space
// (size that is equal to m + n) to hold additional elements from nums2.

// Example:

// javascript

// Input: nums1 = [1, 2, 3, 0, 0, 0], m = 3, nums2 = [2, 5, 6], n = 3
// Output: [1, 2, 2, 3, 5, 6]

// Solution

function merge(nums1, m, nums2, n) {
  let i = m - 1; // Pointer for nums1
  let j = n - 1; // Pointer for nums2
  let k = m + n - 1; // Pointer for the merged array

  while (j >= 0) {
    if (i >= 0 && nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i--;
    } else {
      nums1[k] = nums2[j];
      j--;
    }
    k--;
  }
}

// Test case
let nums1 = [1, 2, 3, 0, 0, 0];
let nums2 = [2, 5, 6];
merge(nums1, 3, nums2, 3);
console.log(nums1); // Output: [1, 2, 2, 3, 5, 6]

// Explanation:

// Start merging from the end of both arrays to avoid overwriting elements in nums1.
// Use three pointers to compare elements from the end of nums1 and nums2 and place them in the correct position.
