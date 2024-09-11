// Find the Peak Element

// Problem Description:
// Given an array of integers, find a peak element, i.e., an element 
// that is greater than its neighbors. Return the index of the peak element.


function findPeakElement(nums) {
  let left = 0, right = nums.length - 1;
  
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    
    if (nums[mid] > nums[mid + 1]) right = mid;
    else left = mid + 1;
  }
  
  return left;
}

// Test case
console.log(findPeakElement([1,2,3,1])); // Output: 2 (index of peak element 3)