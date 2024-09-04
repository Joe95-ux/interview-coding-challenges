// Find the First Unique Character in a String

// Problem Description:
// Given a string s, find the first non-repeating character and return its index. If it does not exist, return -1.

// Example:

// javascript

// Input: s = "leetcode"
// Output: 0

// Solution

function firstUniqChar(s) {
    const charCount = {};
  
    // Count frequency of each character
    for (let char of s) {
      charCount[char] = (charCount[char] || 0) + 1;
    }
  
    // Find the first character with a frequency of 1
    for (let i = 0; i < s.length; i++) {
      if (charCount[s[i]] === 1) {
        return i;
      }
    }
  
    return -1;
  }
  
  // Test case
  console.log(firstUniqChar("leetcode")); // Output: 0
  console.log(firstUniqChar("loveleetcode")); // Output: 2
  console.log(firstUniqChar("aabb")); // Output: -1
  
//   Explanation:
  
//  Use a hash map to count the frequency of each character in the string.
//  Iterate through the string a second time to find the first character with a frequency of 1.
  
  