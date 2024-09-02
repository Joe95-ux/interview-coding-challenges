// Problem Description: Given an array of integers nums and an integer 
// target, return the indices of the two numbers such that they add up to target.

// Example:

// javascript

// Input: nums = [2, 7, 11, 15], target = 9
// Output: [0, 1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// solution

function twoSum(nums, target){
    const numIndices = new Map();

    for(let i = 0; i < nums.length; i ++){
        const compliment = target - nums[i];

        if(numIndices.has(compliment)){
            return [numIndices.get(compliment), i];
        }

        numIndices.set(nums[i], i);
    }

    return [];
}

// Test case
console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]

// Explanation:

// Use a hash map (Map) to store the indices of the numbers encountered.
// For each number, check if the complement (i.e., target - number) exists in the map.
// If found, return the indices; otherwise, store the current number and its index.

// Time Complexity: O(n)
// Space Complexity: O(n)