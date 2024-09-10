// Problem Description:
// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique.


function intersection(nums1, nums2) {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);
  return [...set1].filter(num => set2.has(num));
}

// Test case
console.log(intersection([1, 2, 2, 1], [2, 2])); // Output: [2]