/**
 *  Palindrome Partitioning

* Problem:
* Given a string s, partition s such that every substring of the partition is 
* a palindrome. Return all possible palindrome partitioning of s.

* For example:

    * Input: s = "aab"
    * Output: [['a', 'a', 'b'], ['aa', 'b']]

* Solution:
* This is a backtracking problem. We recursively explore all possible partitions 
* of the string and check if the resulting substrings are palindromes.
 */

function partition(s) {
  const result = [];

  function isPalindrome(str) {
    let left = 0,
      right = str.length - 1;
    while (left < right) {
      if (str[left] !== str[right]) return false;
      left++;
      right--;
    }
    return true;
  }

  function backtrack(start, currentPartition) {
    if (start === s.length) {
      result.push([...currentPartition]);
      return;
    }

    for (let end = start; end < s.length; end++) {
      const substring = s.slice(start, end + 1);
      if (isPalindrome(substring)) {
        currentPartition.push(substring);
        backtrack(end + 1, currentPartition);
        currentPartition.pop();
      }
    }
  }

  backtrack(0, []);
  return result;
}

console.log(partition("aab")); // Output: [['a', 'a', 'b'], ['aa', 'b']]


// Explanation:

//     Backtracking: We try to partition the string in all possible ways. For each partition, 
//     we check if the substring is a palindrome. If it is, 
//     we recursively explore the rest of the string.
//     Palindrome Check: We use a helper function to check if a string is a palindrome. 
//     We recursively explore further partitions if the substring is valid.
//     Time Complexity: O(n * 2ⁿ), where n is the length of the string. 
//     We explore all possible partitions of the string and check if each partition is a palindrome.