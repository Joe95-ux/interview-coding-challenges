// Problem Description:
// Given an array of integers, move all zeroes 
// to the end while maintaining the relative order of the non-zero elements.

function moveZeroes(nums) {
    let nonZeroIndex = 0;
    
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== 0) {
        [nums[nonZeroIndex], nums[i]] = [nums[i], nums[nonZeroIndex]];
        nonZeroIndex++;
      }
    }
  }
  
  // Test case
  let nums = [0, 1, 0, 3, 12];
  moveZeroes(nums);
  console.log(nums); // Output: [1, 3, 12, 0, 0]
  