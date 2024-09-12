// Palindrome String

// Problem Description:
// Given a string s, check if it is a palindrome. A palindrome is a word, phrase, or sequence that reads the same backward as forward, ignoring cases and non-alphanumeric characters.


function isPalindrome(s) {
  const filteredString = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  const reversedString = filteredString.split('').reverse().join('');
  return filteredString === reversedString;
}

// Test case
console.log(isPalindrome("A man, a plan, a canal: Panama")); // Output: true