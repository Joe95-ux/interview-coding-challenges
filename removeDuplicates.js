// Remove Duplicates from Sorted Array

// Problem Description:
// Given a sorted array, remove the duplicates in-place such that each element appears
// only once and return the new length.


function removeDuplicates(nums) {
  if (nums.length === 0) return 0;
  
  let j = 0;
  
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[j]) {
      j++;
      nums[j] = nums[i];
    }
  }
  
  return j + 1;
}

// Test case
let nums = [1, 1, 2];
console.log(removeDuplicates(nums)); // Output: 2 (the first two elements are [1, 2])