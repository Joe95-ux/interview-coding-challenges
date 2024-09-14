// Search Insert Position

// Problem Description:
// Given a sorted array and a target value, return the index if the 
// target is found. If not, return the index where it would be if inserted in order.


function searchInsert(nums, target) {
  let left = 0, right = nums.length - 1;
  
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  
  return left;
}

// Test case
console.log(searchInsert([1,3,5,6], 5)); // Output: 2