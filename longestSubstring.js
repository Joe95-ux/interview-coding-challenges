// Problem Description: Given a string s, find the length of 
//the longest substring without repeating characters.

//Example

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Solution

function lengthOfLongestSubstring(s) {
    const charIndexMap = new Map();
    let maxLength = 0;
    let start = 0;
  
    for (let end = 0; end < s.length; end++) {
      if (charIndexMap.has(s[end])) {
        start = Math.max(start, charIndexMap.get(s[end]) + 1);
      }
  
      charIndexMap.set(s[end], end);
      maxLength = Math.max(maxLength, end - start + 1);
    }
  
    return maxLength;
  }
  
  // Test case
  console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3

  
// Explanation

// Use a sliding window technique with two pointers (start and end).
// Maintain a hash map (Map) to store the last index of each character.
// Update the start pointer when a repeating character is found.
// Calculate the maximum length of the substring as we iterate.

// Time Complexity: O(n)
// Space Complexity: O(min(n, m)) where n is the length of the string and m is the size of the character set.