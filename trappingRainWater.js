/** Trapping Rain Water

Problem:
Given n non-negative integers representing an elevation map where the width of each bar is 1, 
compute how much water it can trap after raining.

For example, given the array [0,1,0,2,1,0,1,3,2,1,2,1], the amount of trapped water is 6.

Solution: This problem can be solved using two approaches:

    Brute Force: For each element, find the maximum height on the left and the maximum height on the right, 
    then calculate the trapped water.
    Optimal Solution: Use the two-pointer approach to calculate the trapped water efficiently in one pass.

We’ll go with the optimal solution.

*/


function trap(height) {
  if (height.length === 0) return 0;

  let left = 0;
  let right = height.length - 1;
  let leftMax = 0;
  let rightMax = 0;
  let trappedWater = 0;

  while (left < right) {
    if (height[left] < height[right]) {
      if (height[left] >= leftMax) {
        leftMax = height[left];
      } else {
        trappedWater += leftMax - height[left];
      }
      left++;
    } else {
      if (height[right] >= rightMax) {
        rightMax = height[right];
      } else {
        trappedWater += rightMax - height[right];
      }
      right--;
    }
  }

  return trappedWater;
}

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));  // Output: 6
/**
 * Explanation:

    Two-Pointer Technique: We use two pointers (left and right) that move towards each other from both ends of the array. 
    The trapped water is calculated by comparing the current height with the maximum heights on the left and right.
    Key Idea: At any point, the amount of water trapped depends on the smaller of the maximum heights to the left and 
    right of the current position.
    Time Complexity: O(n), where n is the number of elements in the array, since we process each element once.
 */
