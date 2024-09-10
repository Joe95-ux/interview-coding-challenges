// Valid Anagram

// Problem Description:
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.


javascript

function isAnagram(s, t) {
  if (s.length !== t.length) return false;
  const count = {};
  
  for (let char of s) {
    count[char] = (count[char] || 0) + 1;
  }
  
  for (let char of t) {
    if (!count[char]) return false;
    count[char]--;
  }
  
  return true;
}

// Test case
console.log(isAnagram("anagram", "nagaram")); // Output: true